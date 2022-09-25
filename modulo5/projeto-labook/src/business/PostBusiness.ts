import { PostDatabase } from "../database/PostDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ConflictError } from "../errors/ConflictError"
import { InvalidInputError } from "../errors/InvalidInputError"
import { NotFoundError } from "../errors/NotFoundError"
import { Post, PostDataInputDTO, PostInputDTO } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    createPost = async (post: PostInputDTO) => {

        const { token } = post
        if (!token) {
            throw new InvalidInputError("First, you need to login and get a token")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (!userTokenData) {
            throw new AuthorizationError("Invalid token")
        }

        const { content} = post
      

        if (!content ) {
            throw new InvalidInputError("Invalid input. content required")
        }
        

        const postId = this.idGenerator.generate()

        const newPost = new Post(postId, content, userTokenData.id)

        await this.postDatabase.insertPost(newPost)

        return newPost

}

getPost = async (postInput: PostDataInputDTO) => {

    const { token, postId } = postInput

    if (!token) {
        throw new InvalidInputError("First, you need to login and get a token")
    }

    if (postId === ":id") {
        throw new InvalidInputError("Fill the :id with the post id")
    }

    if (!postId) {
        throw new InvalidInputError("Invalid postId")
    }

    const userTokenData = this.authenticator.getTokenData(token)

    if (!userTokenData) {
        throw new AuthorizationError("Invalid token")
    }

    const post = await this.postDatabase.selectPostbyId(postId)

    if (!post) {
        throw new NotFoundError("Post not found")
    }

    return post
}

deletePost = async (postInput: PostDataInputDTO) => {

    const { token, postId } = postInput

    if (!token) {
        throw new InvalidInputError("First, you need to login and get a token")
    }

    if (postId === ":id") {
        throw new InvalidInputError("Fill the :id with the post id")
    }

    if (!postId) {
        throw new InvalidInputError("Invalid postId")
    }

    const userTokenData = this.authenticator.getTokenData(token)

    if (!userTokenData) {
        throw new AuthorizationError("Invalid token")
    }

    const post = await this.postDatabase.selectPostbyId(postId)

    if (!post) {
        throw new NotFoundError("Post not found")
    }

    await this.postDatabase.deletePost(postId)

        return post

    return post
}

likePost = async (postInput: PostDataInputDTO) => {

    const { token, postId } = postInput

    if (!token) {
        throw new InvalidInputError("First, you need to login and get a token")
    }

    const userTokenData = this.authenticator.getTokenData(token)

    if (!userTokenData) {
        throw new AuthorizationError("Invalid token")
    }

    if (!postId || postId === ":postId") {
        throw new InvalidInputError("Fill the :postId with the post id")
    }

    const post = await this.postDatabase.selectPostbyId(postId)

    if (!post) {
        throw new NotFoundError("Post not found")
    }

    const userLike = await this.postDatabase.checkLikeOnPost(userTokenData.id, postId)

    if (!userLike) {
        await this.postDatabase.insertLike(userTokenData.id, postId)
    } else if (userLike?.status === "dislike") {
        await this.postDatabase.changeDislikeToLike(userTokenData.id, postId)
    } else {
        throw new ConflictError("You already liked this post") 
    }

}

dislikePost = async (postInput: PostDataInputDTO) => {

    const { token, postId} = postInput

    if (!token) {
        throw new InvalidInputError("First, you need to login and get a token")
    }

    const userTokenData = this.authenticator.getTokenData(token)

    if (!userTokenData) {
        throw new AuthorizationError("Invalid token")
    }

    if (!postId || postId === ":postId") {
        throw new InvalidInputError("Fill the :postId with the post id")
    }

    const post = await this.postDatabase.selectPostbyId(postId)

    if (!post) {
        throw new NotFoundError("Post not found")
    }

    const userLike = await this.postDatabase.checkLikeOnPost(userTokenData.id, postId)

    if (!userLike) {
        throw new Error("You can only dislike a post that you have previously liked")
    }

    if (userLike?.status === "dislike") {
        throw new ConflictError("You have already disliked this post")
    }

    await this.postDatabase.insertDislike(userTokenData.id, postId)

}


}
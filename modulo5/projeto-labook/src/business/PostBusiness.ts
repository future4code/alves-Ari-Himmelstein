import { PostDatabase } from "../database/PostDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { InvalidInputError } from "../errors/InvalidInputError"
import { Post, PostInputDTO } from "../models/Post"
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

}
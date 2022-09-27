import { Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    insertPost =  async (newPost: Post) => {
        try {

            await BaseDatabase.connection()
                .insert({
                    id: newPost.getId(),
                    content: newPost.getContent(),
                    user_id: newPost.getUserId()                    
                })
                .into(PostDatabase.TABLE_POSTS)


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectPostbyId = async (postId: string) => {
        try {
            const post = await BaseDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_POSTS)
                .where({ id: postId })

            return post[0] && Post.toPostModel(post[0])

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deletePost = async (id: string): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .delete()
                .from(PostDatabase.TABLE_POSTS)
                .where({ id })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    checkLikeOnPost = async (userId: string, postId: string) => {
        try {

            const result = await BaseDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_LIKES)
                .where({
                    user_id: userId
                })
                .andWhere({
                    post_id: postId
                })
            
            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    insertLike = async (userId: string, postId: string) => {
        try {

            await BaseDatabase.connection()
                .insert({
                    post_id: postId,
                    user_id: userId
                })
                .into(PostDatabase.TABLE_LIKES)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    

    insertDislike = async (userId: string, postId: string) => {
        try {

            await BaseDatabase.connection()
                .update({
                    status: "dislike"
                })
                .into(PostDatabase.TABLE_LIKES)
                .where({
                    user_id: userId
                })
                .andWhere({
                    post_id: postId
                })

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    changeDislikeToLike = async (userId: string, postId: string) => {
        try {

            await BaseDatabase.connection()
                .update({
                    status: "like"
                })
                .into(PostDatabase.TABLE_LIKES)
                .where({
                    user_id: userId
                })
                .andWhere({
                    post_id: postId
                })

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}
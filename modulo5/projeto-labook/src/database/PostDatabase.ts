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

}
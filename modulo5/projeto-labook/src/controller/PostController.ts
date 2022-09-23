import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { PostInputDTO } from "../models/Post";

export class PostController {
  
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { id, content, userId } = req.body

            const post: PostInputDTO = {
                id,
                content,
                userId,
                token
            }

            const newPost = await this.postBusiness.createPost(post)

            res.status(201).send({ message: "Post created successfully", newPost })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }


}
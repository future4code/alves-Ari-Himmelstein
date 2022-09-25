import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { PostDataInputDTO, PostInputDTO } from "../models/Post";

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

    getPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const postId = req.params.id

            const postInput: PostDataInputDTO = {
                token,
                postId
            }

            const post = await this.postBusiness.getPost(postInput)

            res.status(200).send({ post })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    deletePost = async (req: Request, res: Response) => {
        try {
            const postId = req.params.id
            const token = req.headers.authorization as string

            const postInput: PostDataInputDTO = {
                token,
                postId
            }

            const post = await this.postBusiness.deletePost(postInput)

            res.status(201).send({ message: "Post deleted successfully" })

            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
            
        }
    }
    
    likePost = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const {postId} = req.params

            const postInput: PostDataInputDTO = {
                token,
                postId
            }

            await this.postBusiness.likePost(postInput)

            res.status(201).send({ message: "Post successfully liked"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    dislikePost = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const {postId} = req.params

            const postInput: PostDataInputDTO = {
                token,
                postId
            }

            await this.postBusiness.dislikePost(postInput)

            res.status(200).send({ message: "Post successfully disliked"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }


}
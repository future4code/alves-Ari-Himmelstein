import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { SignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const user: SignupInputDTO = {
                name,
                email,
                password
            }

            const token = await this.userBusiness.signUp(user)

            res.status(201).send({ message: "User created successfully", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }


}
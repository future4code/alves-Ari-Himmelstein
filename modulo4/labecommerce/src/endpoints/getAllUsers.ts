import { Request, Response } from "express";
import { selectUsers } from "../data/selectUsers";




export const getAllUsers = async(
    req: Request,
    res: Response
): Promise <void> => {
    try {
             
        const users = await selectUsers()

            if(users.length < 1) {
            res.statusCode = 404
            throw new Error("Não existem usuários!");
        }

        res.status(200).send(users)
    } catch (error:any) {
        res.status(500).send({
            message: error.message
          });
    }
}

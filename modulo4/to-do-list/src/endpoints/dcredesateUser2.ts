import { Request, Response } from "express";

export default async function createUser(
    req:Request,
    res:Response
){
    try {
        // validar entradas da requisição


        // consultar o banco de dados
        // consultar o banco de dados


        // validar saidas do banco


        // responder ou finalizar a
        
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }

}
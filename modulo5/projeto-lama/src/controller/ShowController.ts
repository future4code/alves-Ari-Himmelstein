import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

}

public createShow = async (req: Request, res: Response) => {
    try {
        const input: ICreateShowInputDTO = {
            token: req.headers.authorization as string,
            band: req.body.band,
            startsAt: req.body.startsAt
        }

        const response = await this.showBusiness.createShow(input)
        res.status(201).send(response)
    } catch (error) {
        console.log(error)
        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
        res.status(500).send({ message: "Erro inesperado" })
    }
}
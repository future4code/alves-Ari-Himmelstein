import { Request, Response } from "express"
import { PaymentBusiness } from "../business/PaymentBusiness"

import { BaseError } from "../errors/BaseError"
import { ICreatePaymentInputDTO } from "../models/Payment"

export class PaymentController {
    constructor(
        private paymentBusiness: PaymentBusiness
    ) {}

    
    public createPayment = async (req: Request, res: Response) => {
        try {
            const input: ICreatePaymentInputDTO = {
                clientId: req.body.id,
                buyer: req.body.buyer,
                amount: req.body.amount,
                type: req.body.type,
                card: req.body.card
            }

            const response = await this.paymentBusiness.createPayment(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar pagamento" })
        }
    }

    public getPayment = async (req: Request, res: Response) => {
        try {
            const response = await this.paymentBusiness.getPizzasV2()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar pagamento" })
        }
    }
}
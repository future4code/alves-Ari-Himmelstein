import { Router } from "express"
import { PaymentBusiness } from "../business/PaymentBusiness"
import { PaymentController } from "../controller/PaymentController"
import { PaymentDatabase } from "../database/PaymentDatabase"

import { IdGenerator } from "../services/IdGenerator"

export const paymentRouter = Router()

const paymentController = new PaymentController(
    new PaymentBusiness(
        new PaymentDatabase(),
        new IdGenerator()
    )
)

paymentRouter.post("/", paymentController.createPayment)
paymentRouter.get("/", paymentController.getPayment)
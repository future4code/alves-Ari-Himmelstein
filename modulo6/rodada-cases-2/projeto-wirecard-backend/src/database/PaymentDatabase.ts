
import { Buyer, IBuyerDB } from "../models/Buyer"
import { IPaymentDB, Payment } from "../models/Payment"
import { BaseDatabase } from "./BaseDatabase"
import { BuyerDatabase } from "./BuyerDatabase"

export class PaymentDatabase extends BaseDatabase {
    public static TABLE_PAYMENTS = "Wire_Payments"

    public toBuyerDBModel = (buyer: Buyer): IBuyerDB => {
        return {
            name: buyer.getName(),
            email: buyer.getEmail(),
            cpf: buyer.getCpf()
        }        
    }

    public toPaymentDBModel = (payment: Payment): IPaymentDB => {
        return {
            id: payment.getId(),
            amount: payment.getAmount(),
            type: payment.getType(),
            status: payment.getStatus(),
            cardHolderName: payment.getCardHolderName()


        }

        
    }
    
    public findByCpf = async (cpf: string): Promise<IBuyerDB | undefined> => {
        const result: IBuyerDB[] = await BaseDatabase
            .connection(BuyerDatabase.TABLE_BUYERS)
            .select()
            .where({ cpf })

        return result[0]
    }

    public createBuyer = async (buyer: Buyer): Promise<void> => {
        const buyerDB = this.toBuyerDBModel(buyer)

        await BaseDatabase
            .connection(BuyerDatabase.TABLE_BUYERS)
            .insert(buyerDB)
    }

    public createPayment = async (payment: Payment): Promise<void> => {
        const userDB = this.toPaymentDBModel(user)

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }
   
}
import { IBuyerDB, ICard } from "./Buyer"

export interface IPaymentDB {
    id: string,
    amount: number,
    type: string,
    status: string,
    card_holder_name: string,
    card_number: string,
    card_expiration_date: Date,
    card_cvv: string,
    boleto_number: string,
    client_id: string,
    buyer_cpf:string
}



export class Payment {
    constructor(
        private id: string,
        private amount: number,
        private type: string,
        private status: string,
        private card: ICard,
        private boleto_number: string,
        private client_id: string,
        private buyer: IBuyerDB

    ) {}
    
    public getId = () => {
        return this.id
    }
    
    public getAmount = () => {
        return this.amount
    }

    public getType = () => {
        return this.type
    }

    public getStatus = () => {
        return this.status
    }

    public getCardHolderName = () => {
    
    return this.card.card_holder_name
    }
    public getBoletoNumber = () => {
        return this.boleto_number
    }

    public getClientId = () => {
        return this.client_id
    }

    public getBuyer = () => {
        return this.buyer
    }

   


    public setStatus = (newStatus: string) => {
        this.status = newStatus
    }


    public setBoletoNumber = (newBoletoNumber: string) => {
        this.boleto_number = newBoletoNumber
    }

   
}

export interface ICreatePaymentInputDTO {
    clientId: string,
    buyer: IBuyerDB,
    amount: number,
    type: string,
    card: ICard,
}

export interface ICreatePaymentOutputDTO {
    message: "Pagamento realizado com sucesso",
    boleto: "string"
   
}
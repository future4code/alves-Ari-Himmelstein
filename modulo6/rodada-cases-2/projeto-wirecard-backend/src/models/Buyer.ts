export interface IBuyerDB {
    name: string,
    email: string,
    cpf: string
}

export interface IClientDB {
    id: string
}

export interface ICard{
    card_holder_name: string,
    card_number: string,
    card_expiration_date: Date,
    card_cvv: string
}



export class Buyer {
    constructor(
        private name: string,
        private email: string,
        private cpf: string
    ) {}
    
    public getName = () => {
        return this.name
    }
    
    public getEmail = () => {
        return this.email
    }

    public getCpf = () => {
        return this.cpf
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setCpf = (newCpf: string) => {
        this.cpf = newCpf
    }

   
}

export class Client {
    constructor(
        private id: string,
      
    ) {}
    
    public getId = () => {
        return this.id
    }
}


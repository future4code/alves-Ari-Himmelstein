
import { BuyerDatabase } from "../database/BuyerDatabase"
import { PaymentDatabase } from "../database/PaymentDatabase"
import { ParamsError } from "../errors/ParamsError"
import { Buyer, IBuyerDB } from "../models/Buyer"
import { ICreatePaymentInputDTO, ICreatePaymentOutputDTO} from "../models/Payment"
import { IdGenerator } from "../services/IdGenerator"

export class PaymentBusiness {
    constructor(
        private paymentDatabase: PaymentDatabase,
        private idGenerator: IdGenerator
    ) {}


    public createPayment = async (input: ICreatePaymentInputDTO): Promise<ICreatePaymentOutputDTO> => {

        const { clientId, buyer, amount, type, card } = input
        

        if (typeof buyer.name !== "string") {
            throw new ParamsError("Parâmetro 'nome' inválido")
        }

        if (typeof buyer.email !== "string") {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        if (buyer.cpf.length < 6) {
            throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }

        if (!buyer.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }
        const buyerDB  = await this.paymentDatabase.findByCpf(buyer.cpf)

        if ( !buyerDB) {
            const nbuyer = new Buyer(
                buyer.name,
                buyer.email,
                buyer.cpf
                        
            )
           await this.paymentDatabase.createBuyer(nbuyer)
        }
        const paymentId = this.idGenerator.generate()

        await this.paymentDatabase.createPayment()

      

        // const response: IGetPizzasOutputDTO = {
        //     message: "Pizzas retornadas com sucesso",
        //     pizzas: pizzas.map((pizza) => ({
        //         name: pizza.getName(),
        //         price: pizza.getPrice(),
        //         ingredients: pizza.getIngredients()
        //     }))
        // }

        // return response
    }

    public getPizzasV2 = async () => {

        const rawPizzasFormatted = await this.pizzaDatabase.getPizzasFormatted()

        const pizzas: any = []

        for (let rawPizza of rawPizzasFormatted) {
            const pizzaAlreadyOnArray = pizzas
                .find((pizza: any) => pizza.name === rawPizza.name)

            if (pizzaAlreadyOnArray) {
                pizzaAlreadyOnArray.ingredients.push(rawPizza.ingredient_name)
            } else {
                const pizza = {
                    name: rawPizza.name,
                    price: rawPizza.price,
                    ingredients: [ rawPizza.ingredient_name ]
                }

                pizzas.push(pizza)
            }
        }

        return {
            pizzas
        }
    }
}

export class BuyerBusiness {
    constructor(
        private buyerDatabase: BuyerDatabase,
        
    ) {}
}
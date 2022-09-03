import { Request, Response } from "express"
import { insertPurchasesByUser } from "../data/insertPurchases"
import { getProductById } from "../data/selectAllProducts"
import { getUserById } from "../data/selectUsers"
import { Purchase } from "../types"




export const createPurchases = async(
    req: Request,
    res: Response
): Promise <void>=> {

    try {
        
        const { userId, productId, quantity } =  req.body

        
        if(!userId || !productId || !quantity) {
            res.statusCode = 400
            throw new Error("'userId', 'productId' e 'quantity são obrigatórios!"); 
        }

        
        const user = await getUserById(userId)

        
        if(!user) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado!");
        }

       
        const product = await getProductById(productId)

        
        if(!product) {
            res.statusCode = 404
            throw new Error("Produto não encontrado!");
        }

        
        const totalPrice = product.price * quantity
        

        
        const purchase: Purchase = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }
        
        await insertPurchasesByUser(purchase)

        res.status(201).send("Compra realizada com sucesso!")

    } catch (error:any) {
        res.status(500).send({
            message: error.message
          });
    }
}


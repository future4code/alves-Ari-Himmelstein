import { Purchase } from "../types"
import { connection } from "./connections"



export const insertPurchasesByUser = async(purchase: Purchase): Promise <void> => {
    
     await connection("labecommerce_purchases")
    .insert({
        id: purchase.id,
        user_id: purchase.userId,
        product_id: purchase.productId,
        quantity: purchase.quantity,
        total_price: purchase.totalPrice
    }) 

}
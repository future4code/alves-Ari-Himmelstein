import { Product } from "../types"
import { connection } from "./connections"



export const selectAllProducts = async(): Promise <Product[]> => {
    
    const products = await connection("labecommerce_products")
        .select("labecommerce_products.id","labecommerce_products.name","labecommerce_products.price",
        "labecommerce_products.image_url")

        return products
}


export const getProductById = async(productId: string): Promise <Product> => {

    const product = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product[0]
}

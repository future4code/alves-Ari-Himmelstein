
import { Address } from "../types"
import { connection } from "./connection"

export const insertAddress = async (address: Address) => {
    await connection
        .insert(address)
        .into("webservices_exercicio")
}
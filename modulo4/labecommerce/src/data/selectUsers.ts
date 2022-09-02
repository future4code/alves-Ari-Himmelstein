import { connection } from "./connections";

export default async function selectUsers():Promise<userData[]> {
    
    const result = await connection("labecommerce_users")

    console.log(result)
}
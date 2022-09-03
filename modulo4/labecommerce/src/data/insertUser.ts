import { User } from "../types"
import { connection } from "./connections"


// Essa função está inserindo um usuário na tabela "labecommerce_users" 
export const insertUser = async(user: User): Promise <void> => {
    
     await connection("labecommerce_users")
    .insert(user) 
}


       // import { userData } from "../types";
// import { connection } from "./connections";


// export default async function insertUser (insertUser:userData):Promise<string> {
        
//             const {id,name,email,password} = insertUser
     
//             await connection("labecommerce_users")
//             .insert({
//                 id,
//                 name,
//                 email,
//                 password
//             })

//             return `usuario ${name} cirado com sucesso`
// }
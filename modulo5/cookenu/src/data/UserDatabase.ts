
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "cookenu_user"

    getUserByEmail = async (email: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(UserDatabase.TABLE_NAME)
                .where({ email })

            return result[0] && User.toUserModel(result[0])
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    insertUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}


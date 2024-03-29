import {  User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "Labook_Users"


    insertUser = async (newUser: User): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: newUser.getId(),
                    name: newUser.getName(),
                    email: newUser.getEmail(),
                    password: newUser.getPassword(),
                    role: newUser.getRole() 
                })
                .into(UserDatabase.TABLE_NAME)
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

     getUserByEmail = async (email: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email })
            
            return result[0] && User.toUserModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getUserById = async (id: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ id })
            
            return result[0] && User.toUserModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
}
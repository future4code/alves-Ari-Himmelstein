import { hash } from "bcryptjs"
import { UserDatabase } from "../database/UserDatabase"
import { IUserDB, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    signUp = async (user: IUserDB) => {

        try {
            const { name, email, password, role } = user

            if (!name || !email || !password ) {
                throw new Error("All the fields are required")
            }

         

            if (password.length < 6) {
                throw new Error("Password must be at least 6 characters")
            }

            if (!email.includes("@")) {
                throw new Error("Invalid email, must contain @")
            }

            const id = new IdGenerator().generate()

            const cypherPassword = await new HashManager().hash(password)

            const newUser = new User(id, name, email, cypherPassword,  role)

            const userDB = new UserDatabase()
            await userDB.createUser(newUser)

            const token = new Authenticator().generateToken({ id, role })

            return token
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    login = async (email: string, password: string) => {
            
        try {
        
            if (!email || !password) {
                throw new Error("All the fields are required")
            }

            const userDB = new UserDatabase()
            const userData = await userDB.getUserByEmail(email)

            if (!userData) {
                throw new Error("User not found")
            }

            const isPasswordCorrect = new HashManager().compare(password, userData.getPassword())

            if (!isPasswordCorrect) {
                throw new Error("Invalid password")
            }

            const token = new Authenticator().generateToken({ id: userData.getId(), role: userData.getRole() })

            return token

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAllUsers = async (token: string) => {
        try {

            if (!token) {
                throw new Error("You must be logged")
            }

            const userData = new Authenticator().getTokenPayload(token)

            if (!userData) {
                throw new Error("Token invalid")
            }

            const userDB = new UserDatabase()
            const users = await userDB.selectAllUsers()

            return users

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteUser = async (id: string, token: string) => {
        try {

            if (!token) {
                throw new Error("You must be logged")
            }
            
            const userData = new Authenticator().getTokenPayload(token)

            if (!userData) {
                throw new Error("Token invalid")
            }

            if (userData.role !== USER_ROLES.ADMIN) {
                throw new Error("You must be an admin to delete users")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(id)

            if (!user) {
                throw new Error("User not found, try another id")
            }

            await userDB.deleteUser(id)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


  

}
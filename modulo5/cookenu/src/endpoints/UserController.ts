import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    signUp = async (req: Request, res: Response): Promise<any> => {
        try {
            const { name, email, password, role } = req.body

            if (!name || !email || !password || !role) {
                res.statusCode = 400
                throw new Error("Please provide name, email, password and role")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Password must have at least 6 characters")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error('User already exists')
            }

            const id = new IdGenerator().generate()


            const cypherPassword = new HashManager().createHash(password)

            const newUser = new User(id, name, email, cypherPassword, role)

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({
                id,
                role
            })

            res.status(200).send({
                message: 'User created successfully',
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Please provide email and password")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error('User does not exist')
            }

            const isPasswordValid = new HashManager().compareHash(password, user.password)

            if (!isPasswordValid) {
                res.statusCode = 400
                throw new Error('Invalid password')
            }

            const token = new Authenticator().generateToken({
                id: user.id,
                role: user.role
            })

            res.status(200).send({
                message: 'User logged in successfully',
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProfileLogged = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(authenticationData.id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProfileById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            if (!id || id === ":id") {
                res.statusCode = 400
                throw new Error("Please provid an id")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    
}
import { UserDatabase } from "../database/UserDatabase"
import { InvalidInputError } from "../errors/InvalidInputError"
import { NotFoundError } from "../errors/NotFoundError"
import { LoginInputDTO, SignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    signUp = async (user: SignupInputDTO) => {

        const { name, email, password } = user

        if (!name || !email || !password) {
            throw new InvalidInputError("Invalid input. Name, email and password are required")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new  InvalidInputError("Invalid name.  name must be a string at least 3 characters")
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new  InvalidInputError("Invalid email.  email must be a string at least 3 characters")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new  InvalidInputError("Invalid email")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new  InvalidInputError("Invalid password.  password must be a string at least 6 characters")
        }

       
        

        const registeredUser = await this.userDatabase.getUserByEmail(email)

        if (registeredUser) {
            throw new NotFoundError("User already exists")
        }

        const id = this.idGenerator.generate()
        const cryptedPassword = await this.hashManager.hash(password)

        const newUser = new User(id, name, email, cryptedPassword, USER_ROLES.NORMAL )

        await this.userDatabase.insertUser(newUser)

        const token = this.authenticator.generateToken({ id })
        
        return token
}

login = async (user: LoginInputDTO) => {

    const { email, password } = user

    if (!email || !password) {
        throw new InvalidInputError("Invalid input. Email and password are required")
    }

    const userFromDB = await this.userDatabase.getUserByEmail(email)

    if (!userFromDB) {
        throw new NotFoundError("Invalid credentials")
    }

    const isPasswordCorrect = this.hashManager.compare(password, userFromDB.getPassword())

    if (!isPasswordCorrect) {
        throw new NotFoundError("Invalid credentials")
    }

    const token = this.authenticator.generateToken({ id: userFromDB.getId() })

    return token
}

}
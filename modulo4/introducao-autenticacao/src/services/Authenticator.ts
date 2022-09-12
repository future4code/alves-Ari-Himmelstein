import { sign, verify } from "jsonwebtoken"

import dotenv from "dotenv"
import { authenticationData } from "../types"


dotenv.config()
export class Authenticator {

    generateToken = (payload: authenticationData) => {
        const token = sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string }
        )

        return token
    }

    getTokenData = (token: string) => {
        const payload = verify(
            token,
            process.env.JWT_KEY as string
        )
        
        return payload as authenticationData
    }
}
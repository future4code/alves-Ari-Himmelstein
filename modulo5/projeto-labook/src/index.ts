import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from "dotenv"
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'
import { postRouter } from './router/postRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.use("/ping", pingRouter)
app.use("/users", userRouter)
app.use("/posts", postRouter)
import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById';
import editUser from './endpoints/editUser';
import createTask from './endpoints/createTask';
import getTaskById from './endpoints/getTaskById';

dotenv.config()

export const connection = knex({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
       
    },
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.put('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.put('/task', createTask)
app.get('/task/:id', getTaskById)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
import { app } from "./app";
import createUser from './endpoints/createUser'
import getUsers from "./endpoints/getUsers";




app.post("/user", createUser)
app.get("/users", getUsers)

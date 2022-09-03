import { app } from "./app";
import { createProducts } from "./endpoints/createProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesByUserId } from "./endpoints/getPurchaseByUserId";




app.post("/user", createUser)

app.get("/users", getAllUsers)

app.post("/products", createProducts)

app.get("/products", getAllProducts)

app.post("/purchases", createPurchases)

app.get("/users/:userId/purchases", getPurchasesByUserId)


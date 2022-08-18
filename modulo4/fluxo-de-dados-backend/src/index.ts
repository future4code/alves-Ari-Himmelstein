import express, { Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Product, products } from "./data";
import { resolvePtr } from "dns";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req:Request, res:Response) =>{
    try {
        res.status(200).send("API funcionando")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

// http://localhost:3003/addProduct

app.post("/addProduct",(req: Request,res: Response) =>{
    const {name, price} = req.body

    try {
        if(!req.body.name || !req.body.price){
            res.statusCode = 401 
            throw new Error("Name e Price não recebidos")
        }
        if(typeof(req.body.name) !== "string"){
            res.statusCode = 422
            throw new Error("String de name não reconhecida")
        }
        if(typeof(req.body.price) !== "number"){
            res.statusCode = 422
            throw new Error("String de price não reconhecida")
        }
        if(req.body.price <= 0){
            res.statusCode = 422
            throw new Error("Price menor ou igual a zero")
        }
        const newProduct : Product = {
            id: Date.now.toString(),
            name: req.body.name,
            price: req.body.price
        }

        products.push(newProduct)

        res.send(products)

        }        
        
    catch (error: any){

        res.status(res.statusCode || 500).send({ message: error.message })
        
    }
})

app.get("/products", (req:Request, res:Response) =>{
    try {
        const result = products
        res.status(200).send({message:"Consulta a lista realizada com sucesso!",result})
    } catch (error: any) {
        res.status(404).send({message: error.message})
    }
})

app.put("/product/:id/edit",(req: Request,res: Response) =>{
const id =req.params.id
const productToEdit = products.find(product => product.id == id)

try {
     if(!req.body.price){
        res.statusCode = 401
        throw new Error("Price não foi recebido")
     }
     if(typeof(req.body.price !== "number")){
        res.statusCode = 422
        throw new Error("Price não é number")
     }
     if(req.body.price <= 0){
        res.statusCode = 422
        throw new Error("Price menor ou igual a zero")
     }
     if(!id){
        res.statusCode = 404
        throw new Error ("Id não foi recebido")
    }
    if(!productToEdit){
        res.statusCode = 404
        throw new Error ("Produto não encontrado")
    }
    const productEdit = products.map(product => product.id === id ?
        { ...product,
        name: req.body.name,
        price: req.body.price}
        : product)
        res.status(201).send(productEdit)
    }
 catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message })
    
}
app.delete("/product/:id/delete", (req,res) => {
    const id = req.params.id
    
    const deleteToEdit = products.find(product => product.id == id)

    try{
        if(!id){
            res.statusCode = 404
            throw new Error ("Id não foi recebido")
        }
        if(!deleteToEdit){
            res.statusCode = 404
            throw new Error ("Produto não encontrado")
        }


      const productDelete = products.findIndex((product) => product.id == id);
        products.splice(productDelete, 1)
        res.status(201).send(products)  
    }
    catch(error: any){
        res.status(res.statusCode || 500).send({ message: error.message })
    }    
})

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});



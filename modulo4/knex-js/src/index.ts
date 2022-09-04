import express, {Express} from 'express'
import knex from "knex";
import cors from 'cors'
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());



/// Exercício 1

///a) Perminte que enviemos uma query para bando usando a linguagem SLQ.

///b) 
app.get("/actors/:name", async (req: Request, res: Response) => {
  try{
     const result = await connection.raw (`
        SELECT * FROM Actor
        WHERE name LIKE "%${req.params.name}%"
     `)
     res.send({message: result[0]})

  } catch (error:any){
     res.status(400).send(error.sqlMessage || error.message)
  }
})

///c) 
app.get("/actors/:gender/count", async (req: Request, res: Response) => {
  try{
     const result = await connection.raw(`
        SELECT COUNT (*) FROM Actor WHERE gender = "${req.params.gender}"
     `);
     
     res.status(200).send(result[0])

  } catch (error:any){
     res.status(400).send(error.sqlMessage || error.message)
  }
})

/// Exercício 2

///a)
app.put("/actors/salary/:id", async (req: Request, res: Response) => {
  try{
     await connection("Actor")
     .update({
        salary: req.body.salary
     }).where ({id : req.params.id})

     res.status(200).send("Salario Modificado")
  } catch (error:any){
     res.status(400).send(error.sqlMessage || error.message)
  }
})

///b)

app.delete("/actors/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").where({ id: req.params.id }).delete()
    
    res.status(200).send("Ator deletado")

  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message)
  }
})

//c)

app.get("/actors/avg/:gender", async (req: Request, res: Response) => {
   try{
      const result = await connection("Actor")
      .avg("salary")
      .where({gender: req.params.gender})
       res.status(200).send(result)
   }catch(error:any){
  res.status(400).send(error.sqlMessage || error.message)
}
}) 

/// Exercício 3

///a)
app.get("/actor/getActorBy/:id", async(req: Request, res: Response) => {
 try{
    const result = await connection("Actor")
    .where({id: req.params.id})

    res.send(result[0])
 } catch {
    res.send("error")
 }
})

///b) 

app.get("/actor", async (req: Request, res: Response) => {
  try {
  const result = await connection("Actor")
  .count("* as gender:")
  .where({gender: req.params.gender})

  res.send(result[0])
  
  } catch(error: any){
     res.send("error")
}
})

/// Exercício 4

///a)
app.put("/actors/salary/:id", async (req: Request, res: Response) => {
  try{
     await connection("Actor")
     .update({
        salary: req.body.salary
     }).where ({id : req.params.id})

     res.status(200).send("Salario Modificado")
  } catch (error:any){
     res.status(400).send(error.sqlMessage || error.message)
  }
})

///b)

app.delete("/actors/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").where({ id: req.params.id }).delete()
    
    res.status(200).send("Ator deletado")

  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message)
  }
})

///DESAFIO
///Exercício 5

app.post("/addmovies", async (req: Request, res: Response) => {
   try{
     await connection("Movies")
       .insert({
           id: Date.now().toString(),
           name: req.body.name,
           synopse: req.body.synopse,
           release_date: req.body.releaseDate,
           rating: req.body.rating,
           playing_limit_date: req.body.playingLimitTime
       })
      res.status(200).send("Filme criando com sucesso")
   } catch (error: any) {
     res.status(400).send(error.sqlMessage || error.message)
   }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

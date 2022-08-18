// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users, User } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

// Exercício 1
//a) O metodo GET
//b) A entidade users

app.get("/users", (req: Request, res: Response) => {
    let erroCode = 400;

    try{
        if(!users){
            erroCode = 404
            throw new Error ("Not Found")
        }

        res.status(200).send(users);

    }catch(error: any){
        res.status(erroCode).send(error.message)
    }
})

//Exercício 2
//a) Não utilizei nenhum parametro
//b) Usei uma condicional para ver type selecionado
app.get("/users/admin", (req, res) => {
    let errorCode = 400

    const admin = users.filter((user) => {
        if(user.type === "ADMIN"){
            return users
        }
    })

    res.send(admin)

    try{

    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})

//Exercício 3
//a)
//b)

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const name: string = req.query.name as string;
      const user: User | undefined = users.find((user) => user.name === name);
      if (!user) {
        errorCode = 404;
        throw new Error("User not found");
      }
      res.status(200).send(user);
    } catch (error: any) {
    
      res.status(errorCode).send({ message: error.message });
    }
  });

//Exercício 4
//a) Não mudou nada, a requisição continuou funcionando
//b) não , porque usar requisiçaõ diferente não é uma boa pratica

app.post("/users/add", (req,res) => {
    let errorCode = 400
    try{
        const {id, name, email, type, age} = req.body;
        if(!id || !name || !email || !type! || !age){
            errorCode = 422;
            throw new Error("Invaled parameter")
        }
        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send({users})
    
    } catch (error: any){
        res.status(errorCode).send({ message: error.message})
    }
})



//Iniciando o servidor
app.listen(3003, ()=>{
    console.log("Server rodando na porta 3003 [http://localhost:3003]")

})


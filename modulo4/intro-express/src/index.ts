import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
});

// Exercício 1

app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})
// Exercício 2


type Users={
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

// Exercício 3


const users: Users[] = [
    {
        "id": 1,
        name: "Genivaldo",
        phone: 11957243821,
        email: "geniv@gmail.com",
        website: "uol.com.br/genivlindo"

    },
    {
        "id": 2,
        name: "Joyce",
        phone: 4197652432,
        email: "jojo@ig.com.br",
        website: "https://ig.com.br/jojo"

    },
    {
        "id": 3,
        name: "Marluce",
        phone: 2178953421,
        email: "mace@gmail.com",
        website: "https:mace.com.br"

    }
]
// Exercício 4
app.get("/users",(req:Request, res: Response)=> {
    res.status(200).send(users)
})
// Exercício 5

type Post = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// Exercício 6

const post: Post[] = [
{
    id: "1",
    title: "Viagem de férias",
    body: "Praias no Brasil",
    userId:"2"
},
{
    id: "2",
    title: "Livros de férias ",
    body: "Ficçaõ cientifica moderna",
    userId: "2"
}
]

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {

    if(!post.length){
       res.status(401).send("Não tem posts.")
    }

    res.status(201).send(post)
})



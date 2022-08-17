import express, { Request, Response } from "express"
import cors from "cors"


const app  = express()

app.use(express.json())
app.use(cors())





app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

type TaskList = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const tasks: TaskList[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "Lavar roupa",
        "completed": false
    },
    {
        "userId": 2,
        "id": 2,
        "title": "Fazer pagamentos",
        "completed": true
    },
    {
        "userId": 3,
        "id": 3,
        "title": "Documentar projeto",
        "completed": false
    }
]
//Get - Retornar todos afazeres
app.get("/tasks", (req: Request, res: Response) =>{
    res.status(200)
    .send(tasks)
})

// Get - Retorna afazer por Id
// app.get("/tasks/:userId", (req: Request, res: Response) =>{
//     const userId = req.params.userId 

//     const result = tasks.filter((task) =>{
//         return task.userId === userId
//     })
//     res.send({tasks: result})
// })

//Post - Criar um novo afazer
app.post("/tasks", (req: Request, res: Response) =>{
    const {userId, title} = req.body

    const toDo = tasks[tasks.length -1]

    const newToDo: TaskList ={
        id: toDo.id +1,
        userId: userId,
        title: title,
        completed: false
    }

    tasks.push(newToDo)

    res.send({
        mensage:"Um novo afazer criado com sucesso!",
        tasks

    })
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})

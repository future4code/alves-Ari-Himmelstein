

import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios";
import { baseURL } from './baseURL';



dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());






// Exercício 1

//a) O endpoint get/subscribers.
//b) Retorna array seria o [] no tipo de retorno na promises.
//c)

// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };

//   const main = async (): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }
//   }

//   main();


// Exercício 2

// a) Iniciamos a função nomeada usamos "async function", e a arrow function usamos "const e nome da função"
// b)

const getSubscribers = async(): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

//   const main = async (): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }
//   }

//   main();



// Exercício 3

type user = {
	id: string;
	name: string;
	email: string;
}

//a)Não
//b) Sim, pois queremos fazer informações específicas devemos fazer uma mapeamento e o tipo any renotrna qualquer informações. 

//c)

// const getSubscribers = async(): Promise<user[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data.map((res: any)=> {
//         return {
//             id: res.id,
//             name: res.name,
//             email: res.email
//         }
//     })
// }



// const main = async(): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }    
// }

// main()


// Exercício 4

//a)Funcão async pois depende de um endpoint da API 

//b) 
// const date = Date.now()
 
// const news = {
//     title: "Noticia de teste",
//     content: "Teste de noticia",
//     date: date
// }

// const createNews =async (news:any) => {
//  return axios.put(`${baseURL}/news`, news)   
// }

// const main = async (): Promise<void> => {
//     try {
//        await createNews(news) 
//        console.log(news)
//     } catch (error: any) {
//         console.log(error.response?.data || error.message)
//     }
// }

// main()

//Exercício 5
// const usuario: user = {
//     id: "01",
//     name:"mariana mendes",
//     email:"mariana@gmail.com"
// }

// const usuario1: user = {
//     id: "02",
//     name:"mariana lima",
//     email:"marianalima@gmail.com"
// }

const sendNotificantions = async (
  users: user[],
  message: string
  ): Promise<void> => {
   for (const user of users) {
    try {
        await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: "oi noticia fresca",
          })
        .then(() => console.log(`mensagem enviada para ${user.id}`))
          .catch(() => console.log("error"))
    } 
      catch (error: any) {
        console.log(`Error no usuário ${user.id}`)
     } 
    }
  };

  const main = async(): Promise<void> => {
    try {
        const users = await getSubscribers()
        await sendNotificantions(users, "message")

    }catch (error: any){
        console.log(error.response?.data || error.message)
    }
  }

  main()

  
// Exercício 6

//a) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises.

//b)Esse método recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas


//c)

  const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
      const promises = users.map(user =>{
        return axios.post(`${baseURL}/notifications`, {
          subscriberId: user.id,
          message: message,
        })
      })
    
      await Promise.all(promises);
  
    } catch {
      console.log("Error");
    }
  };


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});

// Para acessar os argumentos, usamos o objeto process.argv,
// que é um array de todos os parâmetros usados pelo node. 
// Os argumentos [0] e [1] são fixos, 
// onde o primeiro é o próprio node e o segundo é o arquivo que está rodando.
// Todos os valores são armazenados como string.

// Exercicio 1

// const nome = process.argv[2]
// const idade= process.argv[3]
// const novaidade = Number(idade) + 7


// console.log("Olá,",nome,"! Você tem. Em sete anos você terá" , novaidade)



// exercicio 2

// const operator = process.argv[2]
// const number1 = Number(process.argv[3])
// const number2 = Number(process.argv[4])

// let result = 0

// switch(operator){
// 	case "add":
// 		result = number1+number2
// 		break;
// 	case "sub":
// 		result = number1-number2
// 		break;
//     case "mult":
//         result = number1*number2
//         break;
//     case "div":
//         result = number1/number2
//         break;

// }

// console.log("Resposta:", result)


const lista = ["comprar bananas", "apagar a luz", "limpar o banheiro", "Resolver exercicio", "visitar maria"]


const tarefa = process.argv[2]+" "+process.argv[3]+" "+process.argv[4]


const novalista = [...lista,tarefa]

console.table(novalista)
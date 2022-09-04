// Exerciocio 3

const lista = ["comprar bananas", "apagar a luz", "limpar o banheiro", "Resolver exercicio", "visitar maria"]


const tarefa = process.argv[2]+" "+process.argv[3]+" "+process.argv[4]


const novalista = [...lista,tarefa]

console.table(novalista)

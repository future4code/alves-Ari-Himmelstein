// EXERCÍCIO 1

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// Resposta - Não é possivel um tipo number a uma string.

//  const minhaString: string = 89

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
// Resposta - è só usarmos o union type (|)

 const meuNumero: number | string = "89"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string 
}

// const pessoa1: Pessoa = {
//     nome: "Alberto",
//     idade: 18,
//     corFavorita: "amarelo"
// }

// const pessoa2: Pessoa = {
//     nome: "livia",
//     idade: 32,
//     corFavorita: "Laranja"
// }

// const pessoa3: Pessoa = {
//     nome: "Jurandir",
//     idade: 42,
//     corFavorita: "Azul"
// }

// console.table(pessoa1)

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
// enum ArcoIris {
//     VERMELHO = "Vermelho",
//     LARANJA ="laranja",
//     AMARELO ="amarelo", 
//     VERDE = "Verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA ="violeta",
          
// }

// const pessoa1: Pessoa = {
//     nome: "Alberto",
//     idade: 18,
//     corFavorita: ArcoIris.AMARELO
// }

// const pessoa2: Pessoa = {
//     nome: "livia",
//     idade: 32,
//     corFavorita: ArcoIris.LARANJA
// }

// const pessoa3: Pessoa = {
//     nome: "Jurandir",
//     idade: 42,
//     corFavorita: ArcoIris.AZUL
// }


//  console.table(pessoa1)

//EXERCICIO 2

// function obterEstatisticas() {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros

// //Resposta - Entrada é number e a saida é um objeto.

// function obterEstatisticas(numeros: number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: any = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//  console.log(obterEstatisticas([39,88,230,22,37,10]))


// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
//Resposta - soma é number e estatistica é any

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// type AmostraDeDdos {
//     numeros:number
//     obterEstatisticas: (numero:number)=>{}
// }

//Exercico 3

//a)
// type Posts = {
//     autor:string,
//     texto:string
// }

// const posts: Posts[] = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

// //   b)
// //Resposta - A entrada é 

//   function buscarPostsPorAutor(posts: Posts[], autorInformado: string) {
//     return posts.filter(
//       (post: Posts) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//   console.log(buscarPostsPorAutor(posts, "Severo Snape"))

//Exercicio 4 



type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Executar um comondaod que transpile ex: tsc index.ts
// c) criar  scripts  especificos que rodem tsc para todos os arquivos.ts em seus repositorios

//Exercício extra

//a) A versão no target es5, tem forceConsistentCasingInFileName e Strict.
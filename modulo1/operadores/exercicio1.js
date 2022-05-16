


// 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário

let suaIdade = prompt("Qual é sua idade?")

//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let mamigoIdade = prompt("Qual é a idade do/a seu/sua melhor amigo/a?")

//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

console.log("Sua idade é maior do que a do seu melhor amigo?", Number(suaIdade) >Number(mamigoIdade))

//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
console.log("A diferença de idade é:", Number(suaIdade) - Number(mamigoIdade))
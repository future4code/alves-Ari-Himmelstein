//     Exercícios de interpretação de código
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
//     pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        
        // let valor = 0
        // for(let i = 0; i < 5; i++) {
        //   valor += i
        // }
        // console.log(valor)

//          resposta: O codigo vai incrementar em 1 + 2 + 3 + 4 a variavel valor de 0 até 10 ,
//                   e imprimir 10
        
        
//     2. Leia o código abaixo:
        
        
        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        // for (let numero of lista) {
        //   if (numero > 18) {
        // 		console.log(numero)
        // 	}
        // }
        
        
//         a) O que vai ser impresso no console?
//          todos os numeros da lista acima de 18 serão impressos no console.
        
//         b) Se eu quisesse acessar o índice de cada elemento dessa lista, o `for...of...` é 
//         suficiente? Se sim, o que poderia ser usado para fazer isso?
//          Não, seria necessária uma variavel criar uma variavel indice que seria iniciaria com 
//          zero e incrementada com 1.
        
//     3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//       let linha = ""
//       for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//     }
//      console.log(linha)
//      quantidadeAtual++
//      }

// o resultado será a impressão de 4 linhas com  asterisco adicional a cada linha.


// Exercícios de escrita de código

//     1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em 
//         uma variável. 
//        let numPet = Number(prompt("Quantos bichinhos você tem ?"))
//        let petList = []
        
//         a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        
//         b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um 
//         por um, e guarde esses nomes em um array

//          c) Por fim, imprima o array com os nomes dos bichinhos no console
        
        // if ( numPet > 0) {
        //      while (numPet > 0) {

        //        petList.push(prompt(` Qual o nome do numero ${ numPet } ? `))
        //        numPet = numPet -1

        //      }

        //     console.log( petList )   

        // } else {
        //     console.log("Que pena! Você pode adotar um pet!")
        // }
       
//        
//     2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é 
//        composto somente de números. Baseando-se nisso, crie uma função para cada um dos 
//        itens abaixo, realizando as operações pedidas:
        
//         a) Escreva um programa que imprime cada um dos valores do array original.

            const arrayOriginal = [23, 34, 45, 56, 67, 78]

                            
                for (let elemento of arrayOriginal) {
                    
                        console.log(elemento)
                    }
            
            
            
            
        
//         b) Escreva um programa que imprime cada um dos valores do array original divididos 
//         por 10

                 for (let elemento of arrayOriginal) {
                                    
                     console.log(elemento/10)
                 }
        
//         c) Escreva um programa que crie um novo array contendo, somente, os números pares 
//         do array original e imprima esse novo array

                const arrayPar = []

                for (let elemento of arrayOriginal) {
                     if (elemento  %2 === 0 ) {
                         arrayPar.push(elemento)  
                     }             
                    
                }
                console.log(arrayPar)
        
//         d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: 
//         "O elemento do índex i é: numero". Depois, imprima este novo array.

                const arrayIndex = []

                for (let index = 0; index < arrayOriginal.length; index++) {
                    arrayIndex [index] =  `O elemento do índex ${ index } é: ${ arrayOriginal[index] }`
                    
                }
                console.log(arrayIndex)
        
//         e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
                let maior = arrayOriginal[0]
                let menor = arrayOriginal[0]
                for (let elemento of arrayOriginal) {

                    if (elemento > maior){
                        maior = elemento
                    }

                    if (elemento < menor){
                        menor = elemento
                    }
                
                }
                console.log (maior, menor)
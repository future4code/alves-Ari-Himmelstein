// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
//      faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no
//       console o resultado.
        function soma(a, b) {
            const soma = a + b
            return(soma)
        }
    
      console.log(soma(5, 10)) 


//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
//     primeiro número é **maior ou igual** ao segundo.

        function compara(a, b) {
            const resultado = a >= b
            return(resultado)
        }
        console.log(compara(10,5))

//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele
//      é par ou não

        function par(num) {
            const resultado =  (num % 2) == 0
            return(resultado)
        }

        console.log(par(51))
    
//     d) Faça uma função que recebe uma mensagem ( string ) como parâmetro e imprima o
//      tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

        function tama(mensagem) {
            const tamanho = mensagem.length
            const mamensagem = mensagem.toUpperCase()

            return(tamanho, mamensagem)
            
        }

        console.log(tama("só pra Ter Uma Idéia"))
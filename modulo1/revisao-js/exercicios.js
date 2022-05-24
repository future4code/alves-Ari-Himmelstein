// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de 
// elementos que há nele.

function retornaTamanhoArray(array) {

  return ( array.length )
}

// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 

function retornaArrayInvertido(array) {
  
  return ( array.reverse() )
}

// EXERCÍCIO 03
// Escreva uma função que recebe um array de números e retorne o array com os números 
// em ordem crescente. 

function compararNumeros(a, b) {
    return a - b;
  }


function retornaArrayOrdenado(array) {

  return ( array.sort( compararNumeros ) )
  
}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne um novo array com apenas 
// os números pares desse array de entrada.



function retornaNumerosPares(array) {

  const soPares = array.filter(numero => (numero % 2) === 0) 
  return soPares
  }




// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

  const soParesAoquadrado = array.filter(numero => (numero % 2) === 0).map((numero => ( numero ** 2)))
  return soParesAoquadrado
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

  const maior = array.sort(compararNumeros )[array.length - 1]
   return maior

  //  const maior = array.sort((a,b) => a-b)[array.length - 1]
   
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {


 const saida = {
   maiorNumero: 0 ,
  maiorDivisivelPorMenor: true,
  diferenca: 0 ,
}


const maior = num1
const menor = num2

if ( num1 <= num2 ){
  saida.maiorNumero = num2
  saida.diferenca = num2 - num1 

  if ( num2 % num1 === 0){
    saida.maiorDivisivelPorMenor = true
  }else{
    saida.maiorDivisivelPorMenor = false
  }

}else{
  saida.maiorNumero = num1
  saida.diferenca = num1 - num2
  if ( num1 % num2 === 0){
    saida.maiorDivisivelPorMenor = true
  }else{
    saida.maiorDivisivelPorMenor = false
  }

return (saida)

}

  






// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros 
// números pares 

function retornaNPrimeirosPares(n) {

  const listaPar = [0]
  let nPares = n

  for ( let i = 1 ; i < n+2 ;  ) {

    if ((i % 2) === 0 ) {

      listaPar.push(i)
      
      
    }
    
  }
  
  return ( listaPar )
   
}

// EXERCÍCIO 09

// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: 
// ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário 
//   validar se os lados fecham um triângulo).


function classificaTriangulo(ladoA, ladoB, ladoC) {

  if ( (ladoA === ladoB) && (ladoB === ladoC)){
      return ("Equilátero")
  }
  if ( (ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC)){
      return ("Isósceles")
  }
  return ("Escaleno")

}

// EXERCÍCIO 10

// Escreva uma função que receba um array de números e retorne um novo array com apenas 
// 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 

function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e 
// elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do 
// exemplo abaixo:

function retornaChamadaDeFilme(filme) {

  return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = {
    ...pessoa
  }
   
  pessoaAnonima.nome = "ANÔNIMO"
  return ( pessoaAnonima )

}

// EXERCÍCIO 13A
// A) uma função que receba um array e devolva outro contendo as pessoas que tem permissão para entrar no brinquedo

function retornaPessoasAutorizadas(pessoas) {

  let pessoasAutorizadas = pessoas.filter ((pessoa) => { 
    return pessoas.altura >= 1.5
   })
    pessoasAutorizadas = pessoas.filter ((pessoa) => { 
    return pessoas.idade > 14
   })
    pessoasAutorizadas = pessoas.filter ((pessoa) => { 
    return pessoas.idade < 60
   })
   
  return (pessoasAutorizadas)
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
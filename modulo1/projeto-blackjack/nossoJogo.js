/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * */


//  Essa etapa do projeto consiste em criar um programa que:


// 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

console.log("Boas vindas ao jogo de Blackjack!")

// 2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

if(confirm ("Quer iniciar uma nova rodada?")){
   

}else{

   console.log ( " O jogo acabou " )

}
// 3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".

// 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.


   //  A rodada consiste em: 

   // 1. sortear 2 cartas para cada jogador.
   
      function rodada() {

         const mao = []
         mao.push(comprarCarta())
         mao.push(comprarCarta())

         return mao
      }
      
      const maoUsuario = rodada()

      const maoComputador = rodada()

       // 2. definir a pontuação de cada jogador.

      let pontuacaoUsuario = maoUsuario[0].valor + maoUsuario[1].valor
      let pontuacaoComputador = maoComputador[0].valor + maoComputador[1].valor

      console.log (maoUsuario)
      console.log (maoComputador)

      console.log(`Usuário - carta: ${ maoUsuario[0].texto }${ maoUsuario[1].texto } pontuação ${ pontuacaoUsuario }`)
      console.log(`Computador - carta: ${ maoComputador[0].texto }${ maoComputador[1].texto } pontuação ${pontuacaoComputador }` )

               

   // 3. informar o vencedor (usuário ou computador), 
   // ou empate, caso as pontuações sejam iguais.

   if ( pontuacaoUsuario > pontuacaoComputador ) {

      console.log("O usuário ganhou!")
      
   } else { if ( pontuacaoUsuario === pontuacaoComputador) {

      console.log("Empate!")

            } else {
                  console.log("O computador ganhou!")
         }
      
   }



   // 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato 
   // mostrado abaixo

//    "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
//    "Computador - cartas: Q♣️ 10♣️  - pontuação 20"

//    7 - Além disso, deve indicar o vencedor ou um empate

//    "Empate!"
//    "O usuário ganhou!"
//    "O computador ganhou!"


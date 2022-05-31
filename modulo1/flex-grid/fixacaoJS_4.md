``` function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezes = 0
  for ( let numero of arrayDeNumeros){
    if ( numero == numeroEscolhido){
      vezes++
    }
  }
  if (vezes >0 ){
    return(`O número ${numeroEscolhido} aparece ${vezes}x`)
  }
  return ("Número não encontrado")
}```
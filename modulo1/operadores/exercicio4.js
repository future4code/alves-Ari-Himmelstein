


// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e 
// imprima no console as seguintes mensagens seguidas pelo true ou false:
let primeiroNumero = prompt("Qual é o primeiro numero ?")
let segundoNumero = prompt("Qual é o segundo numero ?")

// O primeiro numero é maior que segundo? true
console.log("O primeiro numero é maior que segundo?", Number(primeiroNumero) > Number(segundoNumero))
// O primeiro numero é igual ao segundo? false
console.log("O primeiro numero é igual ao segundo?", Number(primeiroNumero) === Number(segundoNumero))
// O primeiro numero é divisível pelo segundo? true
console.log("O primeiro numero é divisível pelo segundo?", (Number(primeiroNumero) % Number(segundoNumero)) === 0)
// O segundo numero é divisível pelo primeiro? true
console.log("O segundo numero é divisível pelo primeiro?", (Number(segundoNumero) % Number(primeiroNumero)) === 0 )

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.
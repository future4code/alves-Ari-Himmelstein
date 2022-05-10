let nome
let idade
prompt ("nome:", typeof nome)
prompt ("tipo da idade:",typeof idade)

/* Aparece undefined pois as variveis nome e idade não receberam valores
 e nem tiveram seu tipo definido */

nome = prompt("Escreva seu nome")
idade = prompt("Escreva sua idade")
prompt ("nome:", typeof nome)
prompt ("tipo da idade:",typeof idade)

/* Aparece string pois as duas variveis nome e idade 
 foram preenchidas com caracteres lidos pelo prompt */
 
console.log ("Olá", nome,"você tem",idade)

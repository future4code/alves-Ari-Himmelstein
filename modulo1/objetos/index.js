// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1.  Leia o código abaixo
        
        
        // const filme = {
        // 	nome: "Auto da Compadecida", 
        // 	ano: 2000, 
        // 	elenco: [
        // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        // 		"Virginia Cavendish"
        // 		], 
        // 	transmissoesHoje: [
        // 		{canal: "Telecine", horario: "21h"}, 
        // 		{canal: "Canal Brasil", horario: "19h"}, 
        // 		{canal: "Globo", horario: "14h"}
        // 		]
        // }
        
        // console.log(filme.elenco[0])
        // console.log(filme.elenco[filme.elenco.length - 1])
        // console.log(filme.transmissoesHoje[2])
        
        

//         a) O que vai ser impresso no console?

//          O primeiro e o ultimo integrante do array do elenco e o ultimo objeto do array de transmissões hoje.
			// Matheus Nachtergaele
			// Virginia Cavendish
			// Canal: "Globo"
			// horario: "14h"

//     2. Leia o código abaixo
        

        // const cachorro = {
        // 	nome: "Juca", 
        // 	idade: 3, 
        // 	raca: "SRD"
        // }
        
        // const gato = {...cachorro, nome: "Juba"}
        
        // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        // console.log(cachorro)
        // console.log(gato)
        // console.log(tartaruga)
        
        
//         a) O que vai ser impresso no console?
			// idade: 3
			// nome: "Juca"
			// raca: "SRD"
			// idade: 3
			// nome: "Juba"
			// raca: "SRD"
			// idade: 3
			// nome: "Jubo"
			// raca: "SRD"
        
//         b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//           	através dessa sintaxe é feita uma cópia de um objeto inteiro

//     3. Leia o código abaixo
        
//        
        // function minhaFuncao(objeto, propriedade) {
        // 	return objeto[propriedade]
        // }
        
        // const pessoa = {
        //   nome: "Caio", 
        //   idade: 23, 
        //   backender: false
        // }
        
        // console.log(minhaFuncao(pessoa, "backender"))
        // console.log(minhaFuncao(pessoa, "altura"))
        
        
//         a) O que vai ser impresso no console?
//				false
//				undefined
        
//         b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//				No objeto pessoa não existe a propriedade altura.


// Exercícios de escrita de código
//     1. Resolva os passos a seguir: 
        
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um 
// 		   array que sempre terá exatamente três apelidos). Depois, escreva uma função que 
// 		   recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:


		   // Exemplo de entrada
		// const pessoa = {
		// 	nome: "Amanda", 
		// 	apelidos: ["Amandinha", "Mandinha", "Mandi"]
		//}
 
 // Exemplo de saída
 		// "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

		 const pessoa = {
			 nome: "Joaquim" ,
			 apelidos: ["Joca", "Juca", "Quinho"],
		 }

		 function meChameDe (vulgo){
			 console.log(`Eu sou ${ vulgo.nome }, mas pode me chamar de: ${ vulgo.apelidos[0] }, ${ vulgo.apelidos[1] } ou ${ pessoa.apelidos[2] }`)
		 }
		 
		 meChameDe(pessoa)

		//  b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da 
		//  propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função 
		//  feita no item anterior passando como argumento o novo objeto

		const novoApelidos = {
			...pessoa,
			apelidos: ["Jo" , "Joa", "Jojo"],
		}

		meChameDe(novoApelidos)

	// 2. Resolva os passos a seguir: 
    
    // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

		const colaborador = {
			nome: "Joyce",
		 	idade: 27,
			profissão: "Dentista"
		}

		const colaborador1 = {
			...colaborador,
			nome: "Alice",
		 	idade: 22,
		 	profissão: "Auxiliar"
		}

		
    // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes 
	// informações:
    
    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`

		function perfil (funcionario){
		
			console.log(funcionario.nome)
			console.log(funcionario.nome.length)
			console.log(funcionario.idade)
			console.log(funcionario.profissão)
			console.log(funcionario.profissão.length)
		}

		perfil(colaborador)
		
		perfil(colaborador1)

	// 3. Resolva os passos a seguir: 
    
    // a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

		const carrinho = []
    
    // b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
	// seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar 
	// como true)

		const fruta = {
			nome: "banana",
			disponibilidade: true
		}
		const fruta1 = {
			...fruta,
			nome: "laranja",
			disponibilidade: true
		}
		const fruta2 = {
			...fruta,
			nome: "uva",
			disponibilidade: true
		}

    
    // c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do 
	// array de `carrinho`. Invoque essa função passando os três objetos criados.

		function compra (sacola){
			carrinho.push(sacola)
		}

		compra(fruta)
		compra(fruta1)
		compra(fruta2)

		console.log(carrinho)


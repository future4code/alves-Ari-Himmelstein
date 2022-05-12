//  Exercícios de interpretação de código
    
   
    
//     1. Leia o código abaixo
        
        
        // function minhaFuncao(variavel) {
        // 	return variavel * 5
        // }
        
        // console.log(minhaFuncao(2))
        // console.log(minhaFuncao(10))
    
        
        // a) O que vai ser impresso no console?
        //      10
        //      50
        // b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a
        //  função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
        //  nada

        // 2. Leia o código abaixo
    
        
        // let textoDoUsuario = prompt("Insira um texto");
        
        // const outraFuncao = function(texto) {
        //     return texto.toLowerCase().includes("cenoura")
        // }
        
        // const resposta = outraFuncao(textoDoUsuario)
        // console.log(resposta)
        
        
        // a. Explique o que essa função faz e qual é sua utilidade
        // a função coloca todo o texto em caixa baixa, e verifica se tem a palavra cenoura 
        // na frase
        
        // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        //      i.   Eu gosto de cenoura            true
        //      ii.  CENOURA é bom pra vista        true
        //      iii. Cenouras crescem na terra      true


    // Exercícios de escrita de código

    // 1. Escreva as funções explicadas abaixo:
        
    //     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
    //     falando algumas informações sobre você, como: 
        
        
    //     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

        function perfil() {
            console.log("Eu sou Ari, tenho 60 anos, moro em São Paulo e sou engenheiro.")
        }
            
        perfil()
        
        // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
        //  Lembrando que a função não possui entradas, apenas imprime essa mensagem.
        
        // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às 
        // informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e 
        // uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as 
        // informações da pessoa em uma só mensagem com o template:

        function perfil1(nome, idade, cidade, profissao) {
            const frase = `Eu sou ${ nome }, tenho ${ idade } anos, moro em ${ cidade } e sou ${profissao}.`
            return(frase)

        }
        const seuNome = "Ari"
        const suaIdade = 60
        const suaCidade = "São Paulo"
        const suaProfissão = "engenheiro"

        console.log(perfil1(seuNome, suaIdade, suaCidade, suaProfissão))


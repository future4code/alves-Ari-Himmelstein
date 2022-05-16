
    // Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação 
    // e divisão).

    function soma(a, b) {
        const soma = a + b
        return(soma)
    }

    function subtracao(a, b) {
        const subtracao = a - b
        return(subtracao)
    }
    
    function multiplicacao(a, b) {
        const multiplicacao = a * b
        return(multiplicacao)
    }

    function divisao(a, b) {
        const divisao = a / b
        return(divisao)
    }
    // Em seguida, peça para o usuário inserir dois números e chame essas 4 
    // funções com esses valores inputados pelo usuário sendo o argumento. 
    const a = Number(prompt("Insira o primeiro numero:"))
    const b = Number(prompt("insira o segundo numero:"))
    // Por fim, mostre no console o resultado das operações:
    
    console.log (`numeros inseridos: ${a} e ${b}`)
    console.log(`Soma: ${soma(a, b)}`)
    console.log(`Subtração: ${subtracao(a, b)}`)
    console.log(`Multiplicação: ${multiplicacao(a, b)}`)
    console.log(`Divisão: ${divisao(a, b)}`)

    // Números inseridos: 30 e 3
    // Soma: 33
    // Diferença: 27
    // Multiplicação: 90
    // Divisão: 10
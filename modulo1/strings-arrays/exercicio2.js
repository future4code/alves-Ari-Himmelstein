

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
//  Em seguida, siga os passos:

    const menuPreferido = ["Bobo de Camarão", "Churrasco", "Pizza", "Yakisoba", "Quindim"]

// a) Imprima no console o array completo
    console.log(menuPreferido)
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    console.log("Essas são as minhas comidas preferidas: ")
// seguida por cada uma das comidas, **uma embaixo da outra**.
    let i = 0
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    const comidaPreferida = prompt("Qual é sua comida preferida ?")
// Troque a segunda comida da sua lista pela inserida pelo usuário. 
    menuPreferido[1] = comidaPreferida
// Imprima no console a nova lista
    i = 0
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
    i +=1
    console.log( menuPreferido[i])
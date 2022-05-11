// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

        const listaDeTarefas = []
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

      
        listaDeTarefas.push(prompt("Qual tarefa precisa realizar hoje ?"))

       
        listaDeTarefas.push(prompt("Qual tarefa precisa realizar hoje ?"))

    
        listaDeTarefas.push(prompt("Qual tarefa precisa realizar hoje ?"))

   
//     c) Imprima o array no console
    
        console.log(listaDeTarefas)

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

        let i

        i = prompt("digite o **índice** de uma tarefa que já realizou: 0, 1 ou 2")
    
//     e) Remova da lista o item de índice que o usuário escolheu.

        listaDeTarefas.splice(i,1)
    
//     f) Imprima o array no console

        console.log(listaDeTarefas)

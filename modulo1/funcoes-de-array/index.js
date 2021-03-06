// Exercícios de interpretação de código
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1.  Leia o código abaixo
        
        
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" }
        // ]
        
        // const novoArrayA = usuarios.map((item, index, array) => {
        //    console.log(item, index, array)
        // })
        
        
        // a) O que vai ser impresso no console?
        //   Serão impressos os tres objetos com sua arrays de nome e apelido
        
    // 2. Leia o código abaixo
        
        
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayB = usuarios.map((item, index, array) => {
        //    return item.nome
        // })
        
        // console.log(novoArrayB)
        
        
        // a) O que vai ser impresso no console?
        //  Será impresso o novo array com os tres nomes.

        // 3. Leia o código abaixo
    
    
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)
    
    
    // a) O que vai ser impresso no console?
    //    Será impresso o novo array sem o objeto ( array de nome e de apelido) da Chijo.

    // Exercícios de escrita de código
    // 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
    // operações pedidas nos itens abaixo utilizando as funções de array map e filter:

    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]

    //  a) Crie um novo array que contenha apenas o nome dos doguinhos
        const soNomes = pets.map(( pet ) => {
          return pet.nome
        })
        console.log( soNomes )

    //  b) Crie um novo array apenas com os cachorros salsicha

        const soSalsicha = pets.filter(( pet ) => {
          if (pet.raca === "Salsicha") {
             return pet
          }
        }).map((pet) => {
          return pet.nome
        })
        console.log( soSalsicha)

    //  c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
    // são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% 
    // para tosar o/a [NOME]!"

    const soPoodle = pets.filter(( pet ) => {
      if ( pet.raca === "Poodle" ) {
         return pet
      }
    }).map(( pet ) => {
      return ( `Você ganhou um cupom de desconto de 10% para tosar o/a ${ pet.nome }`)
    })
    console.log( soPoodle )

    // 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
    // utilizando as funções de array map e filter:

    const produtos = [
      { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
      { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
      { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
      { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
      { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
      { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
      { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
      { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
      { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
      { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
   ]

  //  a) Crie um novo array que contenha apenas o nome de cada item

    const soNomeItem = produtos.map(( produto ) => {
      return produto.nome
    })

    console.log ( soNomeItem)
  

  //  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
  //  aplicando 5% de desconto em todos eles

    const prodComDesc = produtos.map(( produto ) => {
      produto.preco = produto.preco * 0.95
      return produto
    })

    console.log (prodComDesc)


  //  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

     
    const soBebida = produtos.filter(( produto ) => {
      if ( produto.categoria === "Bebidas") {
           return produto
      }
    })

    console.log( soBebida) 

  //  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra 
  //  "Ypê"

    const soYpe = produtos.filter((produto) => {
      if ( produto.nome.includes("Ypê") ) {
        return produto
      }
    })

    console.log( soYpe )

    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse 
    // array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

    const ofertaYpe = produtos.filter((produto) => {
      if ( produto.nome.includes("Ypê") ) {
        return produto
      }
    }).map( ( produto ) => {
      return ( `Compre ${ produto.nome } por ${ produto.preco } `)
    })
    console.log ( ofertaYpe )


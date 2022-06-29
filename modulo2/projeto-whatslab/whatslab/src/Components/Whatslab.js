import React from 'react'


class Whatslab extends React.Component {

  state = {
    // Array inicializado 
    conversas: [
      {
        usuario: "",
        mensagem: ""
      }
      
    ],
    // Agora precisamos de duas variáveis no estado, guardando
    // os valores dos dois inputs que temos na tela
    valorEntraUsuario: "",
    valorEntraMensagem: ""
  };


  adicionaConversa = () => {
    // Colocamos em uma variavel o objeto que representa uma nova conversa
    const novaConversa = {
      // Puxamos da variavel de estado "valorEntraUsuário" o usuario
      usuario: this.state.valorEntraUsuario,
      // Puxamos da variavel de estado "valorEntraMensagem" a mensagem dele
      mensagem: this.state.valorEntraMensagem
    };
    console.log(novaConversa);
    // Copia array de conversas e adiciona uma conversa no final
    const novasConversas = [...this.state.conversas, novaConversa];

    // Define o estado "" como a variavel "novoUsuario"
    this.setState({ conversas: novasConversas });

    console.log (novasConversas)
  
  };
  

  entraUsuario = (event) => {
    this.setState({
      valorEntraUsuario: event.target.value
    })
    
  };

  entraMensagem = (event) => {
    this.setState({
      valorEntraMensagem: event.target.value
    })
    
  };

  
     



  render() {

     const listaDeConversas = this.state.conversas.map((conversa) => {
       return (
          <p>{conversa.usuario}:  {conversa.mensagem}</p> 
        
       );
      
    });

    return (
      <div>
        <h1>WhatsLab</h1>
        <div>
          <input
            // 
            value={this.state.valorEntraUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.entraUsuario}
            placeholder={"Usuario"}
          />
          <input
            
            value={this.state.valorEntraMensagem}
        
            onChange={this.entraMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaConversa}>Enviar</button>
          
        </div>
        <div>{listaDeConversas}</div>
      </div>
    )
  }

}

export default Whatslab
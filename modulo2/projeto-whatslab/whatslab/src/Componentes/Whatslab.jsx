import React, { Component } from 'react'

export default class whatslab extends Component {

  state ={
    usuario: '',
    mensagem: ''
  }

  // entraUsuario = (event) => {
  //   this.setState({
  //     usuario: event.target.value,
  //   })
  // }

  // entraMensagem = (event) => {
  //   this.setState({
  //     usuario: event.target.value,
  //   })
  // }

  entraForm = (event) => {
    event.preventDefault()
    console.log(event)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.entraForm}>
          <input  type="text" placeholder= 'Usuário'/>

          <input  type= "text" placeholder='Mensagem'/>

          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

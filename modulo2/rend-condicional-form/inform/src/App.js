import React, { Component } from 'react'
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from'./components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'


 Etapa1 = styled.form`
display: flex;
align-items: center;

`;


export default class App extends Component {
  
    state = {
      etapa: 1,
    }
  
    renderizaEtapa = (evento) => {
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />;
        case 2: 
          return <Etapa2 />;
        case 3: 
          return <Etapa3 />;
        case 4: 
          return <Final />;
        default:
            this.setState({etapa: 1})
            break;
    
      }
    }
  
    irParaProximaEtapa = () => {
      this.setState({ etapa: this.state.etapa + 1})
      console.log("antes do render", this.state.etapa)
    }

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      </div>
    );
 }
}



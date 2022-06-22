import React, { Component } from 'react'
import styled from 'styled-components'
import axios from "axios";


const MainContainer = styled.div `

  text-align: center;
  width: 500px;
  margin: 150px auto;
  padding: 20px;
  h2 {
      font-size: 25pt;
      color: solid blue;
  }`

const ContainerInputs = styled.div`

  padding: 10px;
  input {
      width: 400px;
      height: 30px;
  }
  `
const Button = styled.div`
  padding: 30px;
  display:flex;
  justify-content: space-around;
  button {
      margin-top: 20px;
      width: 200px;
      height: 30px;
      background-color: blue;
      color: white;
      border: 1px blue;   
  }
  button:hover {
      cursor: pointer;
      opacity: 0.6;
  }
  `

  

export default class Signup extends Component {
  state = {
    userName: "",
    userEmail: "",
  };

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "ari-himmelstein-alves",
          },
        }
      )
      .then(() => {
        alert("Usuário cadastrado!");
        this.setState({ userName: "", userEmail: "" });
      })
      .catch((err) => {
        alert(err.response);
      });
  };



  render() {
    return (
      <div>

        <MainContainer>
          <h2>Cadastro de Usuário</h2>
         
          <ContainerInputs>

            <input
             placeholder={" Nome do Usuário"}
             value={this.state.userName}
             onChange={this.onChangeUserName}
            />
           </ContainerInputs>
           <ContainerInputs>
            <input
            placeholder={"E-mail do Usuário"}
            value={this.state.userEmail}
            onChange={this.onChangeUserEmail}            
            />
            </ContainerInputs>
            <Button>
                    <button onClick={this.createUser}>Cadastrar</button>
                    <button onClick={this.props.pageUser}>Ir para Lista de Usuários</button>
            </Button>
        </MainContainer>

      </div>
    )
  }
}

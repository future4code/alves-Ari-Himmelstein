import React, { Component } from 'react'
import styled from 'styled-components'
import axios from "axios";

const MainContainer = styled.div `
  text-align: center;
  width: 400px;
  margin: auto;
  padding: 30px;
  margin: 70px auto;
  padding: 20px;
  h2 {
      font-size: 20pt;
      color: solid blue;
  }
  `

const CarddUser = styled.div `
  border-bottom: 1px solid black;
  padding: 20px;
  margin: 10px;
  margin-bottom: 20px;
  width: 350px;
  display: flex;
  justify-content: space-between;
button {
    width: 50px;
    height: 30px;
    background-color: blue;
    color: white;
    border: 1px solid blue;   
}
button:hover {
    cursor: pointer;
    opacity: 0.6;
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
    border: 1px solid blue;   
}
button:hover {
    cursor: pointer;
    opacity: 0.6;
}
`


export default class Userlist extends Component {
  state = {
    usersList: []
  };

  componentDidMount() {
        this.getAllUsers()
  }

  getAllUsers = () => {
    
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "ari-himmelstein-alves",
          },
        }
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      })
      .catch((err) => {
        
        console.log(err.response);
      });
  };

  deleteUser = (id) => {
    const question = window.confirm("Deseja remover o usuário?");
    if (question) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "ari-himmelstein-alves",
            },
          }
        )
        .then(() => {
          alert("Usuário removido");
          this.getAllUsers();
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };
  render() {
    const showUsers = this.state.usersList.map((user) => {
      return (
        <CarddUser key={user.id} >
          <li >
             {user.name}
          </li>
          <button onClick={() => this.deleteUser(user.id)}> x </button>
        </CarddUser>
      );
    });

    return (
     
        <MainContainer>
          <h2>Lista de Usuários</h2>
          <div>
            {showUsers}
          </div>

          <Button>
            <button onClick={this.props.pageSingUp}>Ir para Tela de Cadastro</button>
          </Button>
          
        </MainContainer>
      
    );
  }
}

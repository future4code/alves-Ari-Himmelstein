import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ContainerCreatePlaylist = styled.div `
   
    text-align: center;
    width: 500px;
    margin: 150px auto;
    padding: 20px;
    h2 {
        font-size: 20pt;
        color: solid blue;
    }
`
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

export default class CreatePlayList extends Component {

    state = {
        playlistName: "",
      };

      onChangePlayListName = (event) => {
        this.setState({ playlistName: event.target.value });
      };
    
      createPlaylist = () => {

        const body = {
            name: this.state.playlistName,
            
        }

        axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: 'ari-himmelstein-alves'
            }
        })

        .then((response) => {
            alert ('Playlist criada!')
            this.setState ({playlistName: ''})
            
        })

        .catch ((err) => {
            alert (err.response.data.message)
        })

    }
    
        
    
  render() {
    return (

        <ContainerCreatePlaylist>

        <h2>Crie sua Palylist</h2>

        <ContainerInputs>
            <input
                placeholder={"Nome da Playlist"}
                value={this.state.playlistName}
                onChange={this.onChangePlayListName}
            />


        </ContainerInputs>

        <Button>
            <button onClick={this.createPlaylist}>Criar Playlist</button>
            <button onClick={this.props.pageShow}>Mostrar Playlists</button>
        </Button>

        </ContainerCreatePlaylist>
    )
      
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerShowMusic = styled.div `

    font-family: Open sans;
    text-align: center;
    width: 400px;
    margin: auto;
    padding: 30px;
    margin: 70px auto;
    padding: 20px;
    h2 {
        font-size: 25pt;
        color: blue;
    }
`
const ContainerInputs = styled.div`
    padding: 10px;
    input {
        width: 400px;
        height: 30px;
    }
    `

const CardMusic = styled.div`

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
const CardAudio = styled.audio`
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100px;
    height: 40px;
  }
`


const headers = {
  headers: {
    Authorization: "ari-himmelstein-alves",
  },
};

export default class ShowMusic extends Component {

  state = {
    name: "",
    artist: "",
    url: "",
    musicList: [],
  };

  adicionaMusica = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

  axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
      body,
      headers
    )
  .then((resposta) => {
    console.log(resposta);
    alert("", "A Música foi adicionada com sucesso!", "success");
    this.setState({ name: "", artist: "", url: "" });
    this.pegarMusicaPlaylist();
  })
  .catch((erros) => {
    alert("", "Ops! Algo deu Errado :(", "error");
    console.log(erros);
  });
};

getPlaylistMusic = () => {
  axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
      headers
    )
    .then((response) => {
      this.setState({ musicList: response.data.result.tracks });
      console.log("Atenção", response.data.result.tracks);
    })
    .catch((erros) => console.log(erros));
};

componentDidMount() {
  this.getPlaylistMusic();
}

  render() {
    const musicPick = this.state.musicList.map((music) => {
      return (
        <ContainerShowMusic>
          <CardMusic>
            <h2>Nome:</h2>
            <p>{music.name}</p>
            <h2>Artista:</h2>
            <p>{music.artist}</p>
            <h2>Musica</h2>
            <p>
            <CardAudio controls src={music.url} />
            </p>
          </CardMusic>
        </ContainerShowMusic>
      );
    });
  

    return (
      <ContainerShowMusic>
          <h2>Adicionar Música</h2>
          <ContainerInputs
            placeholder={"Nome da música"}
            value={this.state.name}
            onChange={this.onchangeNome}
          />
          <ContainerInputs
            placeholder={"Nome do artista"}
            value={this.state.artist}
            onChange={this.onchangeArtista}
          />
          <ContainerInputs
            placeholder={"Link da Música"}
            value={this.state.url}
            onChange={this.onchangeLink}
          />
          
          <Button>
            
            <button onClick={this.adicioanaMusica}>Adicionar Música</button>
          
          </Button>

          {musicPick}
          
       


      </ContainerShowMusic>
    )
      
    
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ShowMusic from './ShowMusic'

const ContainerShowPlaylist = styled.div `

  
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
const CardPlaylist = styled.div`

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
        background-color: #F74044;
        color: white;
        border: 1px solid #F74044;   
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

export default class ShowPlayList extends Component {
    state = {

        playlist: [],
        showMusic: false,
        playListSelect:"",

    }
    
    componentDidMount () {
        this.getPlaylist()
     
    }

    getPlaylist = () => {
        axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: 'ari-himmelstein-alves'
            }
        })

        .then ((res) => {
            this.setState({playlist: res.data.result.list})
            console.log("Atenção", res.data.result.list);
        })
        .catch ((err) => {
            console.log(err);
            alert ('Ocorreu um problema, tente novamente!')

        })
    }

    deleteList = (id) => {
        axios.delete ( `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: 'ari-himmelstein-alves'
            }
        })

        .then((res)=> {
            alert ('Usuário removido')
            this.getPlaylist()
        })
        .catch ((err) => {
            alert ('Ocorreu um problema, tente novamente!')
        })
    }

    pageShowMusic = (selectplaylist) => {
        this.setState({ ShowMusicpage: true, playListSelect: selectplaylist });
      };
    
      pageShow = () => {
        this.setState({ ShowMusicpage: false });
      };

  render() {
    if (this.state.pageShowMusic){
        return (       
                <ShowMusic
                pageShow={this.pageShow}
                playListSelect={this.state.playListSelect}
                />
        );
    }
    const showlist = this.state.playlist.map((playlists) =>{
        return (

            <CardPlaylist key={playlists.id}>

                                         
                <li>
                    {playlists.name}
                </li>

                <button onClick={this.props.ShowMusicpage}>Musicas</button>
                <button onClick={() => this.deleteList(playlists.id)}>X</button>
           
            </CardPlaylist>
        );
    });

    return (
        <ContainerShowPlaylist>
            <h2>Lista de Playlist</h2>
            {showlist}
           <Button>
          
            <button onClick={this.props.pageCreate}>Adicionar Playlist</button>
           
           </Button>

        </ContainerShowPlaylist>

    )

}

}

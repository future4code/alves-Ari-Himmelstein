import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  
  render() {

        const listaDePosts = this.state.posts.map((post) => {
      console.log(listaDePosts)
      return({listaDePosts})
      
          })

    return(
      state = {

       
      
      }
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      /MainContainer>
      
     
    )
  }
}

export default App;

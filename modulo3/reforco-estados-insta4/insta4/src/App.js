import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormPost = styled.div`
  border: 1px solid gray;
  width: 300px;
  display:grid;
  justify-items:center;
  align-items:center;
  height: 200px;
  margin-bottom: 10px;
`






function App() {

  const [posts, setPosts] = useState(
    [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50" ,
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Mario",
        fotoUsuario: "https://picsum.photos/50/51" ,
        fotoPost: "https://picsum.photos/200/151"
      },

      {
        nomeUsuario: "Luiza",
        fotoUsuario: "https://picsum.photos/50/52" ,
        fotoPost: "https://picsum.photos/200/153"
      }

    ]

  )

  const [valorInputPessoa, setValorInputPessoa] = useState("")
  const [valorInputEmail, setValorInputEmail] = useState("")
  const [valorInputTexto, setValorInputTexto] = useState("")

  const adicionaPost = () => {

    const novoPost = {
      nomeUsuario: valorInputPessoa ,
      fotoUsuario: "https://picsum.photos/50/55" ,
      fotoPost: "https://picsum.photos/200/154"
      
    }

    const novoPosts = [...posts, novoPost]
    
    setPosts(novoPosts)


  }

  const onChangeInputPessoa = (event) => {
    setValorInputPessoa(event.target.value)
  }
 
  const onChangeInputEmail = (event) => {
    setValorInputEmail(event.target.value)
  }

  const onChangeInputTexto = (event) => {
    setValorInputTexto(event.target.value)
  }

  const listaPosts = posts.map((post, index) => {

    return (
      
      <Post
      Key={index}
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
      />
      

    )
    })
   

  
  return (
    
      <MainContainer>
      
      {listaPosts}
      
          <FormPost>
          <input
            value={valorInputPessoa}
            onChange={onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            
            value={valorInputEmail}
            onChange={onChangeInputEmail}
            placeholder={"Email"}
          />
          <input
            
            value={valorInputTexto}
            onChange={onChangeInputTexto}
            placeholder={"Mensagem"}
          />
          <button onClick={adicionaPost}>Adicionar Post</button>
          </FormPost>

         
          
    </MainContainer>

    
    
  );
}

export default App;

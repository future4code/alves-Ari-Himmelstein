import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import MessageBoard from './MessageBoard'
import MessageSet from './MessageSet'


const MainContainer = styled.div`

    //centralização
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    //comprimentos
    width: 350px;
    max-width: 350px;
    min-height: 80vh;
    max-height: 80vh;
    background-color: lightgray;
    overflow-y: auto;
    `
    
    const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    flex-grow: 1;
    margin-bottom: 0.5em;
     padding-top: 1.2em;
    
    
    `







export default function HomePage() {

  const [sender, setSender] = useState("")
  const [message, setMessage] = useState("")
  const [msglist, setMsgList] = useState([])

  

  const onChangeSenderInput = (e) => setSender(e.target.value)

  const onChangeMsgInput =(e) => setMessage(e.target.value)


  


  const onclickButton = () => {

    const msg = {
      sender,
      message
    }
    console.log(msg)
    const newMsgList = [...msglist, msg]
      //envia a mensagem
      setMsgList(newMsgList)
  }

// onClickButtonEnter = (event) =>{
//     //envia msg pressionando enter
//     if (event.keyCode === 13) {
//         {addMsg}
//     }}


  

 

  return (

    <MainContainer>
      <MessageContainer>
        { msglist.map((msg, index) => {
          return( <MessageBoard key={index} sender={msg.sender} msg={msg.msg}>
      
            </MessageBoard>
          )
        })}
   

      </MessageContainer>

      <MessageSet 
        onChangeSenderInput = {onChangeSenderInput}
        onChangeMsgInput = {onChangeMsgInput}
        onclick = {onclickButton}
        sender= {sender}
        message= {message}

      />
       
    </MainContainer>
    

  )
}

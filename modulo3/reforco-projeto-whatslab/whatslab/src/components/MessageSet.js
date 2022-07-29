import React from 'react'
import styled from 'styled-components'
import send from '../img/send.svg'


const SenderInput = styled.input`
    border: none;
    margin-right: 5px;
    border-radius: 0.5em;
    width: 6em;
    padding: 5px;
    color: #676767;
    font-size: 0.7em;
    `  
    const MsgInput = styled.input`
    border-radius: 0.5em;
    border: none;
    margin-right: 5px;
    padding: 5px;
    width: 15em;
    margin-left: 5px;
    color: #676767;
    font-size: 0.7em;
    `  
    const Button =  styled.button`
    border:solid;
    border-radius: 0.5em;
    margin-left: 5px;
    background: transparent;
    cursor: pointer;
    color: blue;
    font-size: 0.7em;
    font-weight: 600;
    `
    const InputsContainer = styled.div`
    display:flex;
    margin-bottom: 0.5em;
    `

    const Img = styled.img`
    max-height: 2em;
    `


export default function MessageSet(props) {
  return (
    <InputsContainer>
      <SenderInput
        value={props.sender}
        placeholder="nome"
        onChange={props.onChangeSenderInput}
        autoFocus />
      <MsgInput 
        value={props.message}
        placeholder="mensagem"
        onChange={props.onChangeMsgInput}
        />
      <Button onClick={props.addMsg}
       >enviar</Button>
       

    
    
    </InputsContainer>
  )
}

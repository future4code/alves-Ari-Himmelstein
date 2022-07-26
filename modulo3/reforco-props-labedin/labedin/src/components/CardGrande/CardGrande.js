import React from 'react';
import styled from 'styled-components'


const BigcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

   
const BigcardImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`
    
const BigcardTxt = styled.div `
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardGrande(props) {
    return (
        <BigcardContainer>
            <BigcardImg src={ props.imagem } />
            <BigcardTxt>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </BigcardTxt>
        </BigcardContainer>
    )
}

export default CardGrande;
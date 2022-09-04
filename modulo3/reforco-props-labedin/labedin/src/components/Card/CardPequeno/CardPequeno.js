import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    padding: 20px 10px;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    text-indent:1vw;

`
const SmallCardImage = styled.img `
    width: 40px;
    border-radius: 40%;
`   


function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImage src={ props.imagem } />
            
                <h4>{ props.campo }</h4>
                <p>{ props.descricao }</p>
        
        </SmallCardContainer>
    )
}

export default CardPequeno;
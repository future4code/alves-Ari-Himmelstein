import React from 'react';
import './CardPequeno.css'



function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src = { props.imagem } alt="" />
            <div>
                 <p>{ props.endereço }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
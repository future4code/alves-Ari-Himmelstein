import React from 'react'

function PerguntaAberta(props) {
  return (
    <div>
        <p>{props.pergunta}</p>
        <input onChange={props.onChange} value={props.value} />
    </div>
  )
}

export default PerguntaAberta
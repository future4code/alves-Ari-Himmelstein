import React from 'react'
import PerguntaAberta from './PerguntaAberta'

function Etapa2() {
  return (
    <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
    </div>
  )
}

export default Etapa2
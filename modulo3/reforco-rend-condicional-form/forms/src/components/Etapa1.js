import React from 'react'
import PerguntaAberta from './PerguntaAberta'
import PerguntaOpçoes from './PerguntaOpçoes'
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Etapa1() {
  return (
    <MainContainer>
       <h3>ETAPA1 -DADOS GERAIS</h3>
       <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
       <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
       <PerguntaAberta pergunta={"3. Qual o seu email?"} />
       <PerguntaOpçoes
            pergunta={"4. Qual a sua scolaridade?"}
            opcoes={[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
            ]}
        />
      
        
    </MainContainer>
  )
}

export default Etapa1
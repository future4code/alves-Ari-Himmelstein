
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


export default function App() {

   const [etapa, setEtapa] = useState(1)

   const renderizaEtapa = () => {
    
    switch (etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  const proximaEtapa = () => {
   
    setEtapa(etapa+1);
  };

  return (
    <AppContainer>
     {renderizaEtapa()}
     <br />
     {etapa !== 4 && (
      <button onClick={proximaEtapa}> Próxima etapa</button>
     )}
     
    </AppContainer>
    
  );
}



import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/Card/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Ari Himmelstein" 
          descricao="Oi, eu sou o Ari Himmelstein. Estou aqui  na Labenu, buscando um caminho para atuar com engenheiro de software."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem = "https://cdn.icon-icons.com/icons2/2131/PNG/512/email_mesasge_envelope_icon_131541.png"
          campo = "E-mail:"
          descricao = "arih@uol.com"
        />
        <CardPequeno
          imagem = "https://i.pinimg.com/originals/14/22/3f/14223f903ac31d76af40053070c78287.png"
          campo = "Endereço:"
          descricao = "Rua Jurumis, 298 / São Paulo - SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Jornada  desenvolvedor Web Full Stack" 
        />
        
        <CardGrande 
          imagem=""
          nome="EPRAXE" 
          descricao="Consultoria em Gestão de Processos baseada em Process Mining" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

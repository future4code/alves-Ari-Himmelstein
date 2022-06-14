import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ariImg from './img/ari.jpg';
import epraxeImg from './img/EPRAXE.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {ariImg}
          nome="Ari Himmelstein" 
          descricao=" Sou engenheiro eletronico e atuo como gerente de projetos. Estou particpando do curso intensivo da Labenu de desenvolvedor web full stack para atuar como engenheiro de software."
        />
        
        <ImagemButton 
          imagem = "https://cdn-icons-png.flaticon.com/512/626/626013.png" 
          texto="Ver mais"
        />
          <CardPequeno 
          imagem = "https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1654653332~hmac=8fb73dffaa7f277db5c939f213529e40"
          endereço = " Email: mihastein@gmail.com" 
          
        />
         <CardPequeno 
          imagem = "https://cdn-icons-png.flaticon.com/512/331/331810.png"
          endereço = " Rua Pedroso de Moraes 265" 
          
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem = {epraxeImg}
          nome="EPRAXE" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas" 
          nome="ADVtour" 
          descricao="Diretor de Projetos" 
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

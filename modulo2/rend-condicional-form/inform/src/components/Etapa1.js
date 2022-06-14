import { SForm} from "./styles"



function Etapa1() {
  return (
    
    <div><h1> ETAPA 1 - DADOS GERAIS</h1>
    
      <form action="">
              <label for="">1. Qual o seu nome? </label>
              <br></br>
              <input type="text" id="" name="nome"></input>
              <br></br>
              <label for="">2. Qual a sua idade? </label>
              <br></br>
              <input type="number" id="" name="idade"></input>
              <br></br>
              <label for="">2. Qual o seu email? </label>
              <br></br>
              <input type="email" id="" name="email"></input>
              <br></br>
              <label for="">2. Qual a sua  escolaridade? </label>
              <br></br>
              <select >
                <option> Ensino Médio Incompleto </option>
                <option> Ensino Médio completo </option>
                <option> Ensino Superior Incompleto </option>
                <option> Ensino Superior Completo </option>
              </select>
              <br></br>
            
      </form>       
    </div>
    
    
  );
}

export default Etapa1;
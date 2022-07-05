import React, {useState} from 'react'

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState("")


  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if (curtido) {
      // se true, o estado atualiza curtido para o seu inverso e remove 1 like.
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas-1)
      
    } else {
      // se false, o estado atualiza curtido para o seu inverso e adiciona 1 like.
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas+1)
      setComentando(false)
    }
    console.log(curtido)
    
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    setComentando(!comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
   setInputValue( event.target.value )
   console.log(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    setComentarios([...comentarios, inputValue])
    setInputValue("")
    setNumeroComentarios(numeroComentarios+1)
    console.log(comentario)

  };

  // eslint-disable-next-line no-lone-blocks
  {/* Passo6 */}

  const caixaDeComentario = (comentando) ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
   
      <input
        id={"comentario"}
       
        onChange={onChangeComentario}
        
      />
      {/* Passo4 */}
      
      <button onClick={enviarComentario} >Enviar</button>
    </>
  ) : (
    // Passo8
   
      comentarios.map((comentario, index) => {
        return (
           
            <p key={index}>{comentario}</p>
           
       )
     })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Nome do usuário aqui</span>
        </figure>
      </header>     
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {(curtido)  !== true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
      
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comentando !== false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;
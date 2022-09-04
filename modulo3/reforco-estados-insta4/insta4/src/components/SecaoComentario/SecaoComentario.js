import React, { useState } from "react";
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario (props) {
	const [valorComentario, setValorComentario] = useState("");

	const onChangeComentario = (e) => {

		console.log(e.target.value)
		setValorComentario (e.target.value)




	}

	
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={valorComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	
}

export default SecaoComentario;

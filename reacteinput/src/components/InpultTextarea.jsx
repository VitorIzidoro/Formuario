//Aprender a capturar textos longos em textarea

import { useState } from "react";

function InputTextarea(){
    const [texto, setTexto] = useState('')

    return(
        <div>
            <h3>Escreva seu Comentário: </h3>
            <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite aqui..."
            />
            <p>Comentário: {texto}</p>
        </div>
    )
}
export default InputTextarea
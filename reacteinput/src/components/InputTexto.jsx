//Aprender a capturar o valor de um input de texto e exibi-la em tempo real
//Quando o usuário digitar algo no input, o valor será exibido na tela em tempo real.
//Adicionar um botão que, quando clicado, ele apaga o texto do input

import { useState } from "react";

function InputTexto(){
    const [texto, setTexto] = useState("")

    const limparTexto = () => {
        setTexto("")
    }

    return(
        <div>
            <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite seu Nome:"
            />
            
            <p>Texto digitado: {texto}</p>

            <button onClick={limparTexto}>Limpar Texto</button>
        </div>
    )
}
export default InputTexto;
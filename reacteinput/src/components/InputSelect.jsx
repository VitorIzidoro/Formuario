//Você aprendera a capturar e manipular um select (dropdown)
//o usuario pode escolher uma cor, como por exemplo o azul, e o programa ira mostrar a cor escolhida em azul

import { useState } from "react"
function InputSelect (){
const [cor, setCor] = useState("")

return(
    <div>
        <select value={cor} onChange={(evento) => setCor(evento.target.value)}>
            <option value="">Selecione uma cor</option>
            <option value="blue">Azul 🔵</option>
            <option value="red">Vermelho 🔴</option>
            <option value="green">Verde 🟢</option>
            <option value="yellow">Amarelo 🟡</option>
            <option value="black">Preto ⚫</option>
            <option value="white">Branco ⚪</option>
            <option value="orange">Laranja 🟠</option>
            <option value="bronw">Marrom 🟤</option>
        </select>
        <p style={{ color: cor.toLowerCase()}}>A cor escolhida é: {cor}</p>
    </div>
)
}

export default InputSelect;
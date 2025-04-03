//Você Aprenderá a capturar e validar um número decimal digitado pelo usuário
//Quando o usuário Digitar um número, se ele for menor que 17, você irá exibir a mensagem "Você é menor de idade!"

import { useState } from "react";

function InputNumero(){
    const [idade, setIdade] = useState("");

    return (
        <div>

            <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite sua Idade"
            />

            {idade &&(
                <p>
                    {idade < 18 ? "Você é menor de idade!" : "Você é maior de idade!"}
                </p>       
            )}

            <p>Idade Digitada: {idade}</p>

        </div>
    )
}
export default InputNumero;
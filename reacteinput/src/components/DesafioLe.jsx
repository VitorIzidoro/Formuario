import { useState } from "react";

function Feedback(){
    const [texto, setTexto] = useState('')
    const [number, setNumber] = useState("")

    function Alerta(){
        if(texto !== "" && number !== ""){
        alert(`O seu Feedback: ${texto} e sua nota para ele é de ${number}`)
        } else {
            alert("Erro, seu Feedback está vazio ou nota ⚠")
        }
    }



    return(
        <div>
            <h3>Escreva seu Comentário: </h3>
            <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite o seu Feedback aqui..."
            />
           

            <div>
        <select value={number} onChange={(evento) => setNumber(evento.target.value)}>
            <option value="">Selecione uma nota</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <p>A nota escolhida é {number}</p>
    </div>

    <button onClick={Alerta}>Enviar</button>

        </div>
    )
}
export default Feedback
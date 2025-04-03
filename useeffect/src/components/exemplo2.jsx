//Uso do Array, mas sem nada
import { useState, useEffect } from "react";

function TemaDinamico(){
    const [escuro, setEscuro] = useState(false)

    useEffect(() => {
        const horaAtual = new Date().getHours()
        setEscuro(horaAtual >= 18 || horaAtual < 6)
    }, [])

    return(
        <div style={{backgroundColor: escuro ? '#333' : '#fff', color: escuro ? '#fff' : '#000'}}>
            <h1>Exemplo de tema dinâmico</h1>
            <h2>Modo { escuro ? 'Noturno' : 'Diurno'}</h2>
        </div>
    )
}

export default TemaDinamico;
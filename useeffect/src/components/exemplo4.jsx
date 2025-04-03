//Array com uma vareavel dentro dele
import { useState, useEffect } from "react";

function AlterarTema(){
    const [temaEscuro, setTemaEscuro] = useState(false)

    useEffect(() =>{
        document.body.style.background = temaEscuro ? '#222' : '#fff'
        document.body.style.color = temaEscuro ? '#fff' : '#000'

        console.log(`Tema atualizado: ${temaEscuro} ? "Escuro" : "Claro"`)
    }, [temaEscuro])
    return(
        <div>
            <h2>Modo: {temaEscuro ? "Escuro" : "Claro"}</h2>
            <button onClick={() => setTemaEscuro(!temaEscuro)}>Alterar Tema</button>
        </div>
    )
}

export default AlterarTema;
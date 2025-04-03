import { useState, useEffect } from "react";

function ModoEscuro (){
    const [escuro, setEscuro] = useState(
        () => JSON.parse(localStorage.getItem(ModoEscuro)) || false
    )

    useEffect(() => {
        localStorage.setItem("ModoEscuro", JSON.stringify(escuro))
        document.body.style.backgroundColor = escuro ? "#333" : "#fff"
    }, [escuro])

    return(
        <div style={{ color: escuro ? "#fff" : "#000"}}>
            <h2>Modo {escuro ? "Escuro" : "Claro"}</h2>
            <button onClick={() => setEscuro(!escuro)}>Alterar Modo</button>
        </div>
    )
}

export default ModoEscuro
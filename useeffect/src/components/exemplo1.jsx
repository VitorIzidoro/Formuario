//Uso do Array com algo dentro dele
import { useState, useEffect } from "react";

function AtualizarTitulo(){
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Clicou ${contador} vezes`
    }, [contador])

    return(
        <div>
            <h2>Você clicou {contador} vezes</h2>
            <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
        </div>
    )
}

export default AtualizarTitulo;
import { useState, useEffect } from "react";

function Atualizar(){
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Clicou ${contador} vezes`
    }, [contador])

    return(
        <div>
            <h1>Você clicou {contador} vezes</h1>
            <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
        </div>
    )
}

export default Atualizar;
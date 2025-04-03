//Sem o uso do Array []
import { useState, useEffect } from "react";

function ContadorRederezacoes(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log(`O componente foi renderizado ${contador} vezes`);
    })
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

export default ContadorRederezacoes;
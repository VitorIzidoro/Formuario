import { useEffect, useState } from "react";

function Contador () {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
        setContador(prevcontador => prevcontador + 1);
    }, 1000)
    
    return () => {
        clearInterval(intervalo)
        }
    }, [])

    return(
        <>
        <h1>Contador: {contador}</h1>
        </>
    )
    }
    
    export default Contador;
import { useEffect, useState } from "react";

function Notificacao () {

    const [mensagem, setMensagem] = useState("");

    useEffect(() => {        
        const intervalo = setInterval(() => {
        setMensagem(`Nova notificação as ${new Date().toLocaleTimeString()}`);
     }, 1000)
     
     return () =>
        clearInterval(intervalo)
     }, [])     

    return(
        <div>
            <h1>Notificação</h1>
            {mensagem && <p>{mensagem}</p>}
        </div>
    )
}

    
    
    export default Notificacao;
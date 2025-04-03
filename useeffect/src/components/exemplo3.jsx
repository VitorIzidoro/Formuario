//uso do Array mas sem nada dentro
import { useEffect } from "react";

function MensagemBoasVindas () {
    useEffect(() => {
        alert("Bem-vindo ao sistema!🎉");

        console.log("Componente foi montado!")
    }, [])
    return (
            <h1>Bem-Vindo ao nosso site</h1>   
    )
}
export default MensagemBoasVindas;
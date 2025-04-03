import { useState } from "react";
function BotaoLogin() {
    const [isLogado, setIsLogado] = useState(false); 
    return (
    <div>
    
    <h2>
        {isLogado ? "🎉 Bem-vindo!" : "🔑 Por favor, faça login"}
    </h2> 

    <button onClick={() => setIsLogado(!isLogado)}>
    {isLogado ? "Sair" : "Fazer Login"} </button>
    </div>
    )
}
    export default BotaoLogin;
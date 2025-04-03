import { useState } from "react"

function PainelUsuario() {
    const [isLogado, setIsLogado] = useState(false) 
    return (
    <div style={{ border: "2px solid gray", padding: "10px", width: "300px", textAlign: "center" }}>
        <h2>👤 {isLogado ? "Painel do Usuário" : "Visitante"}</h2>
        {isLogado ? (
    <div>
        <p>Bem-vindo ao sistema!</p>

    <button onClick={() => setIsLogado(false)}>Sair</button> </div>):(<> <p>Faça login para acessar suas informações.</p> 
    <button onClick={() => setIsLogado(true)}>Fazer Login </button> </> )}

    </div>
    )
}
    export default PainelUsuario;
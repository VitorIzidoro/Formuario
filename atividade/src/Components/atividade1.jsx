import { useState } from "react"
import "./style.css"

function Seguir() {
    const [isLogado, setIsLogado] = useState(false) 
    return (
    <div style={{ border: "2px solid gray", padding: "10px", width: "300px", textAlign: "center" }}>
        <h2>👤 {isLogado ? "Seguir Alguém" : "Deixar de seguir"}</h2>
        {isLogado ? (
    <div>
        <p>Segue pra dar uma força 😎</p>

    <button onClick={() => setIsLogado(false)}>Seguir</button> </div>):(<> <p>Valeu por seguir 👍</p> 
    <button onClick={() => setIsLogado(true)}>Seguindo </button> </> )}

    </div>
    )
}
    export default Seguir;
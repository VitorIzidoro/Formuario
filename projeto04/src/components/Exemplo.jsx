function Alerta({ tipo }) {
    return(
        <div style={{ padding: "10px", color: "white", backgroundColor:tipo ==="erro" ? "red" : "green" }}>
        {tipo === "erro" ? "❌ Algo deu errado!" : "✅ Tudo certo!"}

        </div>
    )
}
export default Alerta
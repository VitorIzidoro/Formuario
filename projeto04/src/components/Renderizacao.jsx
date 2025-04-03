function Saudacao({ isLogado }) {
    return <h2>
        {isLogado ? "🎉 Bem-vindo de volta!" : "🔑 Faça login para continuar"}
        </h2>
    }
    export default Saudacao;
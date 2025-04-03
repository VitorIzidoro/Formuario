function BotaoLogado({isLogado}){
    return (
    <>
    <h2>Bem vindo</h2>
    {isLogado && <button>logado</button>}
    </>
    )
}
export default BotaoLogado;
function MensagemLogin ({isLogado}) {
    if(isLogado){
        return <h2>
            🎉 Bem vindo de volta!
        </h2>

    } else{
        return <button>
            🔑 Fazer Login
        </button>
    }

}
export default MensagemLogin;
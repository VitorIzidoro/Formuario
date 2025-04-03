import { useState } from "react";

function CadastroValido() {
    const [userName, setUserName] = useState("");
    const [idade, setIdade] = useState("");
    const [erros, setErros] = useState({ userName: "", idade: "" });

    function validarUserName(nome){
        const regex = /^[a-zA-Z0-9]*$/; //Apenas letras e numeros 
        return regex.test(nome);
    }

    function handleSubmit (event) {
        event.preventDefault();

        const newErros = { userName: "", idade: "" };
        if (!validarUserName(userName)) {
            newErros.userName = "Nome inválido!";
        }
        if (idade < 18) {
            newErros.idade = "Idade inválida!";
        }
        setErros(newErros);

        if (!newErros.userName && !newErros.idade) {
            alert(`Cadastro realizado! Nome: ${userName}, Idade: ${idade}`);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="Box">
            <div>
                <input text="text"
                placeholder="Digite seu nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
                {erros.userName && <p style={{ color: "red" }}>{erros.userName}</p>}
            </div>

            <div>
                <input type="number"
                placeholder="Digite a sua Idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}/>
                {erros.idade && <p style={{ color: "red" }}>{erros.idade}</p>} 
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}
export default CadastroValido;
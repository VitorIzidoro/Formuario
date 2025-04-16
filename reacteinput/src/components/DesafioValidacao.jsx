import { useState} from "react";
import "./Bonitinho.css";

function Validacao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Erro, setErro] = useState("");


  function Alerte() {
    if (nome.length < 3 ) {
      setErro(`Nome muito curto!`);
    } else if (senha.length < 8) {
      setErro(`Senha muito curta!`);
    } else if (!email.includes("@")) {
      setErro(`Email inválido!`);
    } else {
      alert(
        `Seus dados do login: \n Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`
      );
    }
  }

  return (
    <div className= "box">
      <h2>Formulário de login do usuário</h2>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          className="input"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Nome completo"
          max={20}
          min={3}
        />

      </div>


      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          className="input"
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Senha"
          max={20}
          min={8}
        />

<div>
        <label htmlFor="email">E-mail:</label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </div>

{Erro && <p style={{ color: "red" }}>{Erro}</p>}

        <button onClick={Alerte}>Enviar o formulário</button>
      </div>
    </div>
  );
}

export default Validacao;

import { useState } from "react";
import "./Bonitinho.css";

function FormularioLogin() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Idade, setIdade] = useState("");

  function Alerte() {
    alert(
      `Seus dados do login: \n Nome: ${nome} \n Email: ${email} \n Senha: ${senha} \n Idade: ${Idade}`
    );
  }

  return (
    <div className="box">
      <h2>Formulário de login do usuário</h2>
      <div>
        <label>Nome:</label>
        <input
          className="input"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Nome completo"
        />
      </div>

      <div>
        <label>E-mail:</label>
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

      <div>
        <label>Senha:</label>
        <input
          className="input"
          type="password"
          id="senha"
          value={email}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Senha"
        />

        <div>
          <label>Idade:</label>
          <input
            className="input"
            type="number"
            id="idade"
            value={senha}
            onChange={(e) => setIdade(e.target.value)}
            required
            placeholder="Idade"
          />
        </div>

        <button onClick={Alerte}>Enviar o formulário</button>
      </div>
    </div>
  );
}

export default FormularioLogin;

import { useState } from "react";

function CadastroForm() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [genero, setGenero] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Cadastro realizado! Nome: ${nome}, Cidade: ${cidade}, Gênero: ${genero}`
    );
  }
  return (
    <form onSubmit={handleSubmit} className="Box">
      <input
        type="text"
        value={nome}
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />

      <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
        <option value="">Selecione sua cidade</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
      </select>

<label style={{color: "black"}}>Selecione seu gênero: <br></br>
      <input
        type="radio"
        value="Masculino"
        checked={genero === "Masculino"}
        onChange={(e) => setGenero(e.target.value)}
      />
      Masculino
      </label>

      <label style={{color: "black"}}>
      <input
        type="radio"
        value="Feminino"
        checked={genero === "Feminino"}
        onChange={(e) => setGenero(e.target.value)}
      />
      Feminino
      </label>


      <button type="submit">Cadastrar</button>
    </form>
  );
}
export default CadastroForm;

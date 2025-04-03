import { useState } from "react";

function TermosForm() {
  const [aceitarTermos, serAceitarTermos] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!aceitarTermos) {
      setError("Você deve aceitar os termos de uso!");
      return;
    }
    alert("Formulário enviado com sucesso!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          value={aceitarTermos}
          onChange={(e) => serAceitarTermos(e.target.value)}
        />
        Aceito os termos de uso
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default TermosForm;

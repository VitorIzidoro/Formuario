//Aqui você aprenderá a capturar e amarzenar valores de checkbox
//O usuario pode digitar valores, como : "ler" e "viajar", então você precisará de um array para armazenar esses valores
//Com os valores capturados, abaixo aparece: Hobbies: ler e viajar que você digitou

import { useState } from "react";


function Contato() {
  const [Contato, setContato] = useState([]);
  const [opcao, setOpacao] = useState("");

  function Alert() {
    if (Contato !== "" && opcao !== "") {
      alert(`Seu meio de contato é ${Contato} e os dados foi ${opcao}`);
    } else if (Contato == "") {
      alert("Escolha uma opção");
    } else {
      alert("Digite seu contato");
    }
  }

  return (
    <div className="box">
      <h3>Selecione seu meio de Contato:</h3>
      {["WhatsApp", "Email", "Telefone"].map((hobby) => (
        <label key={hobby}>
          <input
            type="radio"
            value={hobby}
            checked={Contato.includes(hobby)}
            onChange={(e) => setContato(e.target.value)}
          />
          {hobby}
        </label>
      ))}

      {Contato != "" ? (
        <p>
          Contato selecionados:
          <label className="Caixa">
            <input
              type="text"
              onChange={(evento) => setOpacao(evento.target.value)}
              placeholder={`Digite seu contato de ${Contato}`}
            />
          </label>
        </p>
      ) : (
        <p>Selecione uma Opção</p>
      )}

      <button onClick={Alert}>Enviar</button>
    </div>
  );
}

export default Contato;

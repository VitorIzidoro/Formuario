import { useState } from "react";
import "./Bonitinho.css";

function Aleatorio() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);
 
  const adicionarItem = () => {
    if (texto.trim() !== "") {
      setItens([...itens, texto]);
      setTexto("");
    }
  };

  const LimparTexto = () => {
    setTexto("");
    setItens([]);
  }

  return (
    <div className="box">
         <h3>Escreva alguma coisa: </h3>
            <textarea className="input"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite o seu Feedback aqui..."
            />
            <br></br>

            <button onClick={adicionarItem}>Adicionar</button>

            <button onClick={LimparTexto}>Limpar</button>
            <br></br>

            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li> // Renderiza cada item da lista
                ))}
            </ul>
     
    </div>
  );
}
export default Aleatorio;
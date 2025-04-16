import { useState } from "react";
import "./Bonitinho.css";

function Adicionar() {
  const [texto, setTexto] = useState("");

  const [Contador, setContador] = useState(2);
  const [Adicionar, setAdicionar] = useState([1]);

  function AdicionarItem(){
    setAdicionar([...Adicionar, Contador]);
    setContador(Contador + 1);
  }
    function RemoverItem(index) {
        const novosItens = [...Adicionar];
        novosItens.splice(index, 1);
        setAdicionar(novosItens);
    }

  return (
    <div className="box">
         <h3>Formulário Dinâmico</h3>

{Adicionar.map((item) => (
    <div key={item}>
        <label>
        <input className="input" 
            type="text"
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite o seu nome"
            />
        </label>

        <label>
        <input className="input"
            type="text"
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite a sua idade"
            />
        </label>

    </div>
))}
      
      <br></br>

        <button onClick={AdicionarItem}>Adicionar</button>
        <button onClick={RemoverItem}>Remover</button>

    </div>
  );
}
export default Adicionar;
import { useState } from "react";


function Carrinho() {
    const [apelido, setApelido] = useState(() => localStorage.getItem('apelido') || '');
    const [complemento, setComplemento] = useState(() => localStorage.getItem('complemento') || '');

  return (
    <div className="box">
    <h3>Valor: {apelido * complemento }</h3>
    <label >Escolha o Produto:
        <select onChange={(e) => setApelido(e.target.value)} value={apelido}>
          <option value={0}>Selecione um produto</option>
        <option value={100} >Fone de ouvido</option>
        <option value={20} >Pizza</option>
        <option value={3000} >Celular</option>
        <option value={400} >Vinho</option>
        <option value={500} >Tenis</option>
    </select>
    </label>

    <label>
        <input className="input" 
            type="Number"
            onChange={(e) => setComplemento(e.target.value)}
            placeholder="Digite quantos você quer"
            value={complemento}

            />
        </label>

    </div>
  );
}

export default Carrinho
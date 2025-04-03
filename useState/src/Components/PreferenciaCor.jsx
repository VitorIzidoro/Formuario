import { useState } from "react";
function Escolha (){
    const [Cor, setCor] = useState("");
    return(
        <>
        <h2>Escolha a cor</h2>
        
        <select onChange={(evento) => setCor(evento.target.value)}>
            <option value="">Selecione uma cor</option>
  <option value="Verde">Verde</option>
  <option value="Vermelho">Vermelho</option>
  <option value="Rosa">Rosa</option>
  <option value="Azul">Azul</option>
</select>

<p>Cor escolhida: {Cor}</p>
        </>
)
}
export default Escolha;
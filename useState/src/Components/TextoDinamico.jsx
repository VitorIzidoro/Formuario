import { useState } from "react";
function Formulario (){
    const [text, settext] = useState("");
    return(
        <>
        <h2>Formulário</h2>
        
        <form onChange={(evento) => settext(evento.target.value)}>
        <label>Digite um Texto:</label>
        <input type="text" id="nome" name="Fname"/>
</form>

<p>O texto escrito foi: {text}</p>
        </>
)
}
export default Formulario ;
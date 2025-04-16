import { useState } from "react";
import "./Bonitinho.css";

function Estrela(){
   const [experiencia, setExperiencia] = useState('')
   const [texto, setTexto] = useState('')

   function Alerte(){
    alert(`A sua avaliação foi de: ${experiencia} \n E o seu comentário foi: ${texto}`)
   }
   return(
     
         <div className="box">
           <h2>Escolha:</h2>
           
           <h3>Escolha a sua avaliação: </h3>
           <label>
           <input
             type="radio"
             value="⭐⭐️⭐️⭐️⭐️"
             checked={experiencia === "⭐⭐️⭐️⭐️⭐️"}
             onChange={(e) => setExperiencia(e.target.value)}
           />
              ⭐️⭐️⭐️⭐️⭐️
           </label>
           
           <label>
           <input
             type="radio"
             value="⭐⭐️⭐️⭐️"
             checked = {experiencia === "⭐⭐️⭐️⭐️"}
             onChange={(e) => setExperiencia(e.target.value)}
           />
           ⭐⭐️⭐️⭐️
           </label>
           
           <label>
           <input
             type="radio"
             value="⭐⭐️⭐️"
             checked={experiencia === "⭐⭐️⭐️"}
             onChange={(e) => setExperiencia(e.target.value)}
           />
           ⭐⭐️⭐️
           </label>

           <label>
           <input
             type="radio"
             value="⭐⭐️"
             checked={experiencia === "⭐⭐️"}
             onChange={(e) => setExperiencia(e.target.value)}
           />
           ⭐⭐️
           </label>

           <label>
           <input
             type="radio"
             value="⭐"
             checked={experiencia === "⭐"}
             onChange={(e) => setExperiencia(e.target.value)}
           />
           ⭐
           </label>

           <p>Opção: {experiencia}</p>
         
           <h3>Como foi sua experiência: </h3>
            <textarea className="input"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder= {`Digite o porque de ${experiencia}`}
            />

            <button onClick={Alerte}>Enviar</button>
         
         </div>
  );
}
export default Estrela
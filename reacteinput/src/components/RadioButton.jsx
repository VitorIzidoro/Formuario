//Capturar a escolha unica de um radiio button
//O usuario digita pizza, e aparece "Sua comida favorita é pizza"
//O usuario digita macarrão, e aparece "Sua comida favorita é macarrão"

import { useState } from "react";

function Radio (){
    const [comida, setComida] = useState("");

    return(
        <div>
            <h3>Escolha sua comida favorita:</h3>
          {["Pizza", "Hambúeguer", "Macarrão"].map((item) => (
            <label key={item}>
                <input
                type="radio"
                name="comida"
                value={item}
                checked={comida === item}
                onChange={(e) => setComida(e.target.value)}
                />
                {item}
            </label>
          ))}
          <p>Sua comida favorita é {comida}</p>
        </div>
    )
}

export default Radio;
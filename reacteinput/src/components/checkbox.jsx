//Aqui você aprenderá a capturar e amarzenar valores de checkbox
//O usuario pode digitar valores, como : "ler" e "viajar", então você precisará de um array para armazenar esses valores
//Com os valores capturados, abaixo aparece: Hobbies: ler e viajar que você digitou

import { useState } from "react";

function InputCheckbox(){
    const [hobbies, setHobbies] = useState([])

    const toggleHobby = (hobby) => {
        setHobbies ((prev) => 
        prev.includes(hobby) ? prev.filter((item) => item !== hobby) : [...prev, hobby])
    }

    return(
        <div>
            <h3>Selecione seus Hobbies:</h3>
            {["ler ", "Correr", "Viajar", "Jogar", "FIFINHA "].map((hobby) => (
                <label key={hobby}>
                    <input
                    type="checkbox"
                    value={hobby}
                    checked={hobbies.includes(hobby)}
                    onChange={() => toggleHobby(hobby)}
                    />
                    {hobby}
                </label>
            ))}
            <p>Hobbies selecionados: {hobbies + ", "}</p>
        </div>
    )
}

export default InputCheckbox
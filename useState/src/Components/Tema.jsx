import './Usestate.css'
import {useState} from 'react'

function Temas(){
    const [temas, settemas] = useState(false)

function mudarTema(){
    if(temas === false){
        settemas (true)
    }
    else{
        settemas(false)
    }
}
        return (
            <div className={temas ? "escuro" : "claro"}>
                <button onClick={mudarTema}>Mudar Tema</button>
                

            </div>
        )

}

export default Temas;
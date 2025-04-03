import './atividade10.css'
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
                <p>O tema está {temas ? "escuro" : "claro"}</p>
                <button className='Botao' onClick={mudarTema}>Mudar Tema</button>               
            </div>
        )

}

export default Temas;
import './curtir.css'
import {useState} from 'react'

function Curtidas(){
    const [curtidas, setcurtidas] = useState(0)
    const [cor, setcor] = useState(0)
    const [coracoes, setcoracoes] = useState([])
    

function AddCurtidas(){

    setcurtidas(curtidas => curtidas + 1)
    setcor("vermelho")
    setcoracoes(coracoes => coracoes + "💘")

}



    return(
        <div>
            <h2>Curtidas: {curtidas}</h2>           
            <button onClick={AddCurtidas} className={cor ? "vermelho" : "escuro"} >Curtir 👍</button>
            <p>{coracoes}</p>


        </div>
    )
}
export default Curtidas
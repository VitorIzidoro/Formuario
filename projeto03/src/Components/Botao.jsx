import './Botao.css'
import {useState} from 'react'

function Contador(){
    const [contador, setContador] = useState(0)
    return(
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}

export default Contador

function Botao (props){
    return (
        <div>
        <button className={props.class}>{props.text}</button>
        </div>
    )
}
export default Botao
import './Usestate.css'
import {useState} from 'react'

function Contador(){
    const [contador, setContador] = useState(0)
    


    function aumentar (){
        setContador(contador => contador + 1)
        }

        function diminuir (){
            setContador(contador => contador + 1)
        }

    return(
        <div className='Botao'>
            <h2>Contador: {contador}</h2>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default Contador
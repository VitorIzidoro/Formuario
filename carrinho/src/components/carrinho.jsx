import './carrinho.css'
import {useState} from 'react'

function Carrinho(){
    const [carrinho, setcarrinho] = useState(0)
    const [cor, setcor] = useState(0)
    

function addCarrinho(){
    if(carrinho < 10){
    setcarrinho(Carrinho => Carrinho + 1)
    setcor("verde")
    } else{
        alert("O Carrinho esta cheio")
    }
}

function rmCarrinho(){
    if(carrinho > 0){
    setcarrinho(carrinho => carrinho - 1)
    setcor("vermelho")
    }else{
        alert("O carrinho está vazio")
    }
}

    return(
        <div className='Botao'>
            <h2 className={cor}>Compras: {carrinho}</h2>
            <button onClick={addCarrinho}>Comprar Item</button>
            <button onClick={rmCarrinho}>Remover Item</button>
        </div>
    )
}
export default Carrinho

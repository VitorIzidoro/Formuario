/* eslint-disable react/prop-types */
function Produto(props) {
    return (
    <div> 
        <h2>🛒 Meu carrinho de compras</h2>
        {props.itens.length > 0 ? (
    <ul>
    {props.itens.map((item, index) => ( 
        <li key={index}>{item}
        </li>
    ))}
    </ul> 

    ) : (
    <p>Seu carrinho está vazio 🛍️</p> )} 
    <p>Total no carrinho {props.itens.length}</p>
    </div>
    )
}
    export default Produto;
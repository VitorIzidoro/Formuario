function Carrinho({ itens }) {
    return (
    <div> 
        <h2>🛒 Meu Carrinho</h2>
        {itens.length > 0 ? (
    <ul>
    {itens.map((item, index) => ( 
        <li key={index}>{item}
        </li>
    ))}
    </ul> 
    ) : (
    <p>Seu carrinho está vazio 🛍️</p> )} 
    </div>
    )
}
    export default Carrinho;
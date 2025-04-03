/* eslint-disable react/prop-types */
function Rodape(props) {
    return ( <footer>  
       <p>{props.texto}</p>
       <img src={props.imagem} alt="Imagem do rodapé"/>
        </footer>
    ) 
}

export default Rodape;
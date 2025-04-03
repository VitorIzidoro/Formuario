import minhaLogo from '../assets/cristiano.png'
import './Cabecalho.css'
function Cabecalho(){
    return(
        <>
    <header>    
    <h1>Ola, mundo</h1> 
    <h3>MELHOR JOGADOR DO MUNDO</h3> 
          <img src={minhaLogo} className="logo react" alt="React logo" />                
        </header>
        </>
    )
}
export default Cabecalho


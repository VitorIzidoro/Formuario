import Contador from './Components/ContadorDuasF'
import Escolha from './Components/PreferenciaCor'
import Formulario from './Components/TextoDinamico'
import Temas from './Components/Tema'
import './App.css'
function App() {

  return (
  
    <div className="Botao">
      <h1>Meu aplicativo React</h1>
      <p>Este é um exemplo de estado React!!!!</p>
     <Contador/>
     <br></br>
     <Escolha/>
     <br></br>
     <Formulario/>
     <br></br>
<Temas/>
    </div>

  )
}

export default App

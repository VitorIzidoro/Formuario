import MensagemLogin from './components/Renderizacaoif'
import BotaoLogado from './components/Renderizacao&&'
import Carrinho from './components/ExCarrinho'
import Alerta from './components/Exemplo'
import Formulario from "./components/Formulario"
import PainelUsuario from './components/PainelUsuario'
import './App.css'
import BotaoLogin from './components/Exemplo2'

function App() {

  return (
    <>
    <MensagemLogin
    isLogado ={true}
    />

    <MensagemLogin
    isLogado ={false}
    />

    <BotaoLogado/>

    <Carrinho itens={["Vinho 🍷", "Pizza 🍕", "Carne 🍖"]} />
    <Carrinho itens={[]}/>

    <Alerta tipo = "erro"/>
    <Alerta tipo = "sucesso"/>

    <BotaoLogin/>

    <Formulario/>

    <PainelUsuario/>
    </>
  )
}

export default App

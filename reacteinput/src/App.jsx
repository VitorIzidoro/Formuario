import './App.css'
/*import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ChatApi from './pages/Sobre'
import Home from './pages/Home'
import Navbar from './pages/Navbar';*/
import Feedback from "./components/DesafioLe";
import Contato from "./components/DesafioLE2";
import FormularioInscricao from "./components/DesafioLe3";
import "./components/Bonitinho.css"
import Estrela from './components/DesafioLe4';
import FormularioLogin from './components/DesafioLogin';
import Aleatorio from './components/DesafioAdd';
import Validacao from './components/DesafioValidacao';
import Adicionar from './components/Desafiovarios';
import Armazenamento from './components/DesafioValidacaoLS';
import Carrinho from './components/DesafioCarrinho';

function App() {
  return (
    <div>
    <Feedback/>
    <Contato/>
    <FormularioInscricao/>
    <Estrela/>
    <FormularioLogin/>
    <Aleatorio/>
    <Validacao/>
    <Adicionar/>
    <Armazenamento/>
    <Carrinho/>
    </div>
  )
}

export default App

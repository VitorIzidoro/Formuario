import "./App.css";
import Seguir from "./Components/atividade1";
import Notificacao from "./Components/atividade2";
import Formulario from "./Components/atividade3";
import Lista from "./Components/atividade4";
import Login from "./Components/atividade5";
import Produto from "./Components/atividade6";
import Hora from "./Components/atividade7";
import Avaliacao from "./Components/atividade9";
import Temas from "./Components/atividade10";
import Jogo from "./Components/atividade11";
import Dashboard from "./Components/atividade8";

function App() {
  return (
    <>
    <Seguir/>
    <hr></hr>
    <p>kawaii</p>

    <Notificacao
    text={0}
    />
    <hr></hr>

    <Formulario />
    <hr></hr>

      <Lista
      itens={["Maçã 🍎", "Laranja 🍊","Carne 🍖", "Vinho 🍷"]}
      />
      <hr></hr>

      <Login/>
      <hr></hr>

      <Produto
    itens={["Maçã 🍎", "Laranja 🍊"]}
      />
      <hr></hr>

      <Hora/>
      <hr></hr>

      <Dashboard login={true}
      notify={5}/>
      <hr></hr>

      <Avaliacao/>
      <hr></hr>

      <Temas/>
      <hr></hr>

      <Jogo/>
    </>
  );
}

export default App;

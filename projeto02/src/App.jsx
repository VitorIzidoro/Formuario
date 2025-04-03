import './App.css'
import Links from './Components/Links'
import Imagens from './assets/react.svg'
import Rodape from './Components/Rodape'
import Perfil from './Components/Perfil'


  function App() {
  
    var data = {
      nome: ["Vitor Hugo", "Murilo Correia", "William Jr.", "Murilo Besson"],
      photos: ["https://i.pinimg.com/originals/d2/f3/28/d2f32866b1bdce2870d62f444052e433.jpg", "https://radiocentrocz.com.br/wp-content/uploads/2021/05/tim-maia-1989-%C2%A9-Divulgacao-1024x1024.jpg", "https://s3.pixers.pics/pixers/700/FO/35/15/95/09/700_FO35159509_11784272cce509c7baa809643031a58a.jpg", "https://cartoon-clipart.co/amp/images/hello-kitty2.png"],
      descrição: ["Descabaçador", "Comedor de Casadas", "Gordinho do Dogão", "Fodasse"]
  };

  return (
    <>
    <header>
      <h1>Sites sobre React</h1>
    </header>
 <a href="https://react.dev" target="_blank">
          <img src={Imagens} className="logo react" alt="React logo" />
        </a>
     <Links/>

     <Perfil data={data} />

      
     <div>
      <Rodape texto="Desenvolvido por Vitor Izidoro 😎 " 
      imagem = "https://static.znews.vn/static/topic/person/cristiano-ronaldo.jpg"
      />
      </div>

    </>
  )
}
export default App

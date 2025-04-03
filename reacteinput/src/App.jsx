import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ChatApi from './pages/Sobre'
import Home from './pages/Home'
import Navbar from './pages/Navbar';

function App() {
  return (
    <>

     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/sobre' element={<ChatApi/>}/>
     <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

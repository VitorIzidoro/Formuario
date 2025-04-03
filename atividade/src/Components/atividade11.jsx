import { useState } from 'react'

function Jogo() {
  const [tentativa, setTentativa] = useState('')
  const [mensagem, setMensagem] = useState('')



  const verificarTentativa = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    setMensagem(tentativa == numeroAleatorio ? 'Você acertou! 🎉' : 'Tente novamente! ❌ ')
    console.log(numeroAleatorio)

  }

  return (
    <div>
      <h4>Jogo de Adivinhação</h4>

      <input 
        type="number" 
        value={tentativa} 
        onChange={(e) => setTentativa(e.target.value)} 
        min="1" 
        max="10" 
      />
      <br/>
      <br/>

      <button onClick={verificarTentativa}>Verificar</button>
      <p>{mensagem}</p>

    </div>
  )
}

export default Jogo
import { useState, useEffect } from 'react'

function Jogo() {
  const [time, setTime] = useState(100);
  const [count, setCount] = useState(0);
    const [acao, setAcao] = useState(true);
    const [stop , setStop] = useState(true);
 
    useEffect(() => {
      let timer;
      if (acao && time > 0) {
        timer = setTimeout(() => setTime(prev => prev - 1),  Math.random() * 14.5);
      } else if (stop == true) {
        timer = setTimeout(() => setCount(prev => prev + 1), 100);
      }
    }, [acao, time, count]);
 
    return (
      <div>
        <h1>{count >= 1 ? "Jogo do Tempo (Clique): " : "Jogo do Tempo (Espere): "}</h1>
        <p>{count} ms</p>
        {count >= 1 ? <button onClick={() => setStop(false)}>Parar</button> : <button>Espere...</button>}
        {stop == false ? <button onClick={() => { setAcao(true); setTime(100); setCount(0); setStop(true)}}>Reiniciar</button> : "" }
      </div>
    );
}

export default Jogo
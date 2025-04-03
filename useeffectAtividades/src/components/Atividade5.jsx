import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(100); 
    const [acao, setAcao] = useState(false);
  
    useEffect(() => {
      let timer;
      if (acao && time > 0) {
        timer = setTimeout(() => setTime(prev => prev - 1), 100);
      } else if (time === 0) {
        setAcao(false);
        alert("Tempo esgotado!");
      }
      return () => clearTimeout(timer);
    }, [acao, time]);
  
    return (
      <div>
        <h1>Temporizador:</h1>
        <h3>{time} segundos restantes</h3>
        <button onClick={() => setAcao(true)} >Iniciar</button>
        <button onClick={() => setAcao(false)} >Parar</button>
        <button onClick={() => { setAcao(false); setTime(100); }}>Reiniciar</button>
      </div>
    );
  };
  
  export default Timer;
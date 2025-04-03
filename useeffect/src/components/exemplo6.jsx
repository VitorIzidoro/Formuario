import { useEffect } from "react";

function Timer () {
useEffect(() => {
    const timer = setTimeout(() => {
    alert("Executando a cada 1 segundo");
}, 1000)

return () => {
    clearTimeout(timer)
    }
}, [])
}


export default Timer;



import { useState, useEffect } from "react";

function Monitorlargura(){
    const [largura, setLargura] = useState(window.innerWidth);
    const [altura, setAltura] = useState(window.innerHeight);
   

    useEffect(() => {
        function atualizarAultura() {
            setAltura(window.innerHeight);
        }
        window.addEventListener('resize', atualizarAultura);
        return () => {
            window.removeEventListener('resize', atualizarAultura);
            }
            
}, [])


    useEffect(() => {
        function atualizarlargura() {
            setLargura(window.innerWidth);
        }
        window.addEventListener('resize', atualizarlargura);
        return () => {
            window.removeEventListener('resize', atualizarlargura);
            }
            
}, [])
return (
    <div>
        <h3> largura da tela: {largura} px </h3>
        <h3> altura da tela: {altura} px </h3>
    </div>
)
}

export default Monitorlargura;
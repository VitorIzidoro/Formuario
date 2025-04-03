import { useState } from "react";
function Hora(){
    const [Hora, setHora] = useState([])

    var Hours = new Date(Hora).getHours();
    var Mensagem = "Digite o Horario"
    if(Hours >= 6 && Hours <= 12){
        Mensagem = "Bom dia";
        }
        else if(Hours >= 13 && Hours <= 18){
            Mensagem = "Boa tarde";
            }
            else if(Hours >= 19 || Hours <= 5){
                Mensagem = "Boa noite";
                }

                return(
                    <div>
                        <input type="datetime-local"
                        onChange={(e) => setHora(e.target.value)} 
                        ></input>
                        <p>{Mensagem}</p>
                        </div>
                
                )
            }
export default Hora;

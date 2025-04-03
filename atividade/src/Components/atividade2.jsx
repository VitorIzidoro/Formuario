function Notificacao(props){

    return(
        <div>
            <h2>Notificações</h2>

            {props.text > 0 && ( <p style={{ color: "white", border:"2px solid white"}}>Nova Notificação</p> )} 
            </div>
            )
        }

export default Notificacao
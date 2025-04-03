//Selecionar uma data (DD/MM/AAAA)
//Mas não poderá digitar o dia anterio

import { useState } from "react";

function InputDate(){
    const [data, setData] = useState("")
    const [erro, seterro] = useState("")

    //Captura a data e valida se é menor que hoje
    const handlechange = (evento) => {
        const dataSelecionada = evento.target.value
        setData(dataSelecionada)

        //Verificar se a data anterior ao dia de hoje
        const dataAtual = new Date().toISOString().split("T")[0]
        if (dataSelecionada < dataAtual || dataSelecionada > dataAtual) {
            seterro("⚠ A data não pode ser anterior ao dia de hoje! ⚠")
        } else{
            seterro("")
        }
    }

    //Formatar a data para DD/MM/AAAA
    const formatarData = (data) => {
        if (!data) return""
        const [ano, mes, dia] = data.split("-")
        return `${dia}/${mes}/${ano}`
    }

    return(
        <div>
            <h3>Escolha Uma Data</h3>
            <input type="date" value={data} onChange={handlechange} />
            {erro && <p style={{color: "red"}}>{erro}</p>}
            {data && <p>Data escolhida: {formatarData(data)}</p>}
        </div>
    )
}
export default InputDate;
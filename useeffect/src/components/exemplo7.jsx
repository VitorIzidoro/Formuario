import {useEffect } from "react";

function Apis (){

useEffect (() => {
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const dados = await response.json();
        console.log(dados)
        
    }
    fetchData
}, [])
}

export default Apis

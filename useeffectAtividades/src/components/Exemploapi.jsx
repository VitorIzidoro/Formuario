import { useState, useEffect } from "react"; 
import "./Api.css"

function ListaUsuario(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar usuário');
                }
                const dados = await resposta.json()
                setUsuarios(dados)
            } catch (erro) {
                setErro(erro.message)
            } finally{
                setLoading(false)
            }
        } 
        fetchUsuarios()
    }, [])

    if(loading) return <h2>Carregando usuário...</h2>
    if(erro) return <h2>Erro: {erro}</h2>
    return (
        <div className="box">
            <h2 className="">Lista de Usuários</h2>
            <ul>
                {usuarios.map((user) =>(
                    <li key={user.id}>{user.name} {user.username} - {user.email} - {user.phone}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaUsuario
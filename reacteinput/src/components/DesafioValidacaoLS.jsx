import { useEffect, useState } from "react";
import "./Bonitinho.css";

function Armazenamento() {


  const [Contador, setContador] = useState(2);
  const [Adicionar, setAdicionar] = useState([1]);
  const [Erro, setErro] = useState("");


  const [nome, setNome] = useState (() => {
    const storedNome = localStorage.getItem("nome");
    return storedNome ? storedNome : "";
  })


  const [email, setEmail] = useState(() => {
    const storedEmail = localStorage.getItem("email");
    return storedEmail ? storedEmail : [];
  })


  const [senha, setSenha] = useState(() => {
    const storedSenha = localStorage.getItem("senha");
    return storedSenha ? storedSenha : "";
  });


  const [theme, setTheme] = useState(() => {
    const temaSalvo = localStorage.getItem('theme');
    return temaSalvo ? JSON.parse(localStorage.getItem('theme')) : true;
  });


function Validacao() {
    if (nome.length < 3 ) {
      setErro(`Nome muito curto!`);
    } else if (senha.length < 8) {
      setErro(`Senha muito curta!`);
    } else if (!email.includes("@")) {
      setErro(`Email inválido!`);
    } else {
      alert(
        `Seus dados do login: \n Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`
      );
      localStorage.setItem("nome", nome);
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
    }
  }

  function AdicionarItem(){
    setAdicionar([...Adicionar, Contador]);
    setContador(Contador + 1);
  }
    function RemoverItem(index) {
        const novosItens = [...Adicionar];
        novosItens.splice(index, 1);
        setAdicionar(novosItens);
    }
useEffect (() => {
    localStorage.setItem("theme", theme)
}, [theme, setTheme]);


  return (
   
    <div className= {`box ${theme}`}>
         <h3>Formulário Dinâmico</h3>

{Adicionar.map((item) => (
    <div key={item}>
        <label>
        <input className="input" 
            type="text"
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o seu nome"
            max={20}
            min={3}
            />
        </label>

        
        <label>
        <input className="input"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite uma senha"
            max={20}
            min={8}
            />
        </label>

        <label>
        <input className="input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu email"
            />
        </label>


    </div>
))}
      
      <br></br>
      {Erro && <p style={{ color: "red" }}>{Erro}</p>}

        <button onClick={AdicionarItem}>Adicionar</button>
        <button onClick={RemoverItem}>Remover</button>
        <button onClick={Validacao}>Enviar</button>
       <label>Alterar Tema: 
        <input type="checkbox"
        checked={theme}
        onChange={(evento) => setTheme(evento.target.checked)} 
        />
       </label>

    </div>
    
  );
}
export default Armazenamento;
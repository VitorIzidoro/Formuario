import { useState, useEffect } from "react";

function ChatApi() {
  const [mensagens, setMensagens] = useState(() => {
    const mensagensSalvas = localStorage.getItem(
      "essa é a chave do local storage"
    );
    return mensagensSalvas ? JSON.parse(mensagensSalvas) : [];
  });

  const [nomeAtual, setNomeAtual] = useState(() => {
    const nomeSalvo = localStorage.getItem("nome do usuario");
    return nomeSalvo ? JSON.parse(nomeSalvo) : "";
  });

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarComentarios() {
      try {
        const resposta = await fetch(
          "https://randomuser.me/api/"
        );

        if (!resposta.ok) {
          throw new Error(
            `Erro pra achar as parada ${resposta.status} ${resposta.statusText}`
          );
        }
        const comentariosObtidos = await resposta.json();

        setMensagens(comentariosObtidos.results);
        localStorage.setItem(
          "essa é a chave do local storage",
          JSON.stringify(comentariosObtidos)
        );

        setCarregando(false);
      } catch (err) {
        setErro(err.message);
      }
    }

    buscarComentarios();
  }, []);

  function enviarMensagem(e) {
    setNomeAtual(e.target.value);
    localStorage.setItem("nomeDousuario", JSON.stringify(e.target.value))
  }

  if (carregando) return <h2>carregando as parada</h2>;

  if (erro) return <h2>Opa, deu erro: {erro}</h2>;

  console.log(mensagens);

  const Nome = mensagens.map((mensagem) => mensagem.name.first);


  return (
    <div>
      
      <h2>Chat API</h2>
     
      <h3>Digite seu Nome:</h3>
      <input
        type="text"
        placeholder= {(`Digite um texto: `) + Nome}
        onChange={(e) => enviarMensagem(e)}
        value={nomeAtual}
      />

    </div>
  );
}

export default ChatApi;
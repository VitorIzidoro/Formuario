import { useState, useEffect } from "react";

function ChatApi() {
  const [mensagens, setMensagens] = useState(() => {
    const mensagensSalvas = localStorage.getItem('essa é a chave do local storage');
    return mensagensSalvas ? JSON.parse(mensagensSalvas) : [];
  });

  const [indiceAtual, setIndiceAtual] = useState(1);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
  
  }, []);

  useEffect(() => {
    if (mensagens.length === 0) return;

    const idIntervalo = setInterval(() => {
      if (indiceAtual < mensagens.length) {
        setIndiceAtual((indiceAnterior) => indiceAnterior + 1);
      } else {
        clearInterval(idIntervalo);
      }
    }, 5000);

    return () => clearInterval(idIntervalo);
  }, [mensagens, indiceAtual]);

  if (carregando) return <h2>carregando as parada</h2>;

  if (erro) return <h2>Opa, deu erro: {erro}</h2>;


  return (
    <div>
      <h2>Chat API</h2>
      <div>
        {mensagens.map((mensagem, index) => {
          if (index < indiceAtual) {
            return (
              <div key={mensagem.id}>
                <strong>{mensagem.name}:</strong> {mensagem.body}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ChatApi;
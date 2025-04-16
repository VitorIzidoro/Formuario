import { useState } from 'react';
import './Bonitinho.css'

function FormularioInscricao() {
  const [nome, setNome] = useState(''); // Armazena o nome do usuário
  const [email, setEmail] = useState(''); // Armazena o e-mail do usuário
  const [notificacao, setNotificacao] = useState(false); // Armazena se o usuário deseja receber notificações por e-mail (checkbox)
  const [mensagem, setMensagem] = useState(false); // Controla a exibição da mensagem de confirmação

  // Função chamada quando o formulário é enviado
  const Submit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
    setMensagem(true);
  };

  return (
    <div className='box'>
      <h2>Formulário de Inscrição</h2>
      <form onSubmit={Submit}> 
      
        <div>
          <label htmlFor="nome">Nome:</label>
          <input className='input'
            type="text"
            id="nome"
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>

      
        <div>
          <label htmlFor="email">E-mail:</label>
          <input className='input'
            type="email"
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

      
        <div>
          <label htmlFor="notificacao">Deseja receber notificações por e-mail?</label>
          <br/>
          <input className='caixa'
            type="checkbox"
            id="notificacao"
            checked={notificacao} 
            onChange={(e) => setNotificacao(e.target.checked)} 
          />
        </div>


        <button type="submit">Inscrever-se</button>
      </form>

      {mensagem && (
        <div>
          <p>Obrigado pela inscrição, você será notificado por e-mail</p>
        </div>
      )}
    </div>
  );
}

export default FormularioInscricao; 
import { useState, useEffect } from 'react';

function InputIdade() {
  const [idade, setIdade] = useState('');
  const [erro, setErro] = useState('');

  // Efeito para verificar o Local Storage ao montar o componente
  useEffect(() => {
    const idadeSalva = localStorage.getItem('idade');
    if (idadeSalva) {
      setIdade(idadeSalva); // Atribui a idade salva ao estado "idade"
    }
  }, []);

  // Função para lidar com a mudança no input
  const handleIdadeChange = (e) => {
    const Idade = e.target.value;
    setIdade(Idade);
    
    try {
      // Validação da idade
      if (Idade >= 18 && Idade <= 100) {
        setErro(''); // Limpa a mensagem de erro se a idade for válida
        localStorage.setItem('idade', Idade); // Salva a idade no Local Storage
      } else {
        localStorage.setItem('idade', Idade); // Salva a idade no Local Storage
        throw new Error('A idade deve estar entre 18 e 100 anos.'); // Lança um erro se a idade for inválida
      }
    } catch (error) {
      setErro(error.message); // Define a mensagem de erro
    }
  };

  // Função para limpar o campo de texto
  const limparIdade = () => {
    setIdade('');
    setErro(''); // Limpa a mensagem de erro
    localStorage.removeItem('idade'); // Remove a idade salva no Local Storage
  };

  return (
    <div>
      <h1>Cadastro de Idade</h1>
      <section>
      <div>
        <label>
          Digite sua idade:
          <input 
            type="number" 
            value={idade} 
            onChange={handleIdadeChange} 
            placeholder="Idade" 
          />
        </label>
      </div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <h2>Idade digitada: {idade}</h2>
      </section>

      <button onClick={limparIdade}>Limpar</button>
    </div>
  );
}

export default InputIdade;

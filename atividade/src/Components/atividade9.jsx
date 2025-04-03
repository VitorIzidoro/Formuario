import  { useState } from 'react';

function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleClick = (estrela) => {
    setAvaliacao(estrela);
  };

  const renderEstrelas = () => {
    const estrelas = [];

      estrelas.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', color: i <= avaliacao ? 'gold' : 'gray', fontSize: '2vw' }}
        >
        ★
        </span>
        
      );
      return estrelas;
    }


    return (
      <div style={{
          border: "2px solid gray",
          padding: "10px",
          width: "300px",
          textAlign: "center",
        }}>
        {renderEstrelas()}
        <p>Você deu {avaliacao} estrelas.</p>
      </div>
    );
    
  }

  

export default Avaliacao;
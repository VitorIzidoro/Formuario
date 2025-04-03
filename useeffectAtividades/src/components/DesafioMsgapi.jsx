import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setMessages(data.slice(0, 10));
      } catch (error) {
        console.error('Erro ao buscar mensagens :(', error); 
      }
    };
    fetchMessages(); 
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setDisplayedMessages((prevMessages) => [...prevMessages, messages[index]]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    if (index >= messages.length) clearInterval(interval); 
    return () => clearInterval(interval);
  }, [index, messages]);

  return (
    <div>
      <h1>Chat Simples</h1>
      <div>
        {displayedMessages.map((message) => (
          <div key={message.id}>  
            <h3>{message.name}</h3>
            <p>{message.body}</p>
            <p>{message.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
// root/src/app/freeChat/page.js

'use client'; // Este archivo se ejecuta en el cliente

import React, { useState } from 'react';

const ChatFreeAgentes = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Agregar el mensaje del usuario al chat
    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // Hacer la solicitud a la API interna
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }), // Enviar el input del usuario a la API
      });

      const data = await res.json();
      const agentMessage = { sender: 'agent', text: data.response };

      // Agregar la respuesta del agente al chat
      setMessages((prevMessages) => [...prevMessages, agentMessage]);
      setInput(''); // Limpiar el campo de entrada
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Desactivar el indicador de carga
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Chat Gratis con Agentes</h1>

      {/* Mostrar los mensajes del chat */}
      <div className="chat-box bg-gray-100 p-4 mb-4 rounded-lg shadow-md">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Formulario para enviar mensajes */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded-lg mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          rows="5"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ChatFreeAgentes;

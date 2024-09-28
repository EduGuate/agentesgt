'use client';

import { useState } from 'react';
import ForbiddenWords from '../../ForbiddenWords/page'; // Asegúrate de que la ruta sea correcta

const TextToImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Obtén la lista de palabras prohibidas
  const forbiddenWords = ForbiddenWords();

  // Función para verificar si el prompt contiene palabras prohibidas
  const containsForbiddenWords = (text) => {
    return forbiddenWords.some(word => text.toLowerCase().includes(word));
  };

  // Función para hacer la consulta a la API interna en /api/huggingface
  const query = async (prompt) => {
    const response = await fetch('/api/huggingface', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }), // Enviando el prompt
    });

    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText.error);
    }

    const { imageUrl } = await response.json();
    return imageUrl;
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Verifica si el prompt contiene palabras prohibidas
    if (containsForbiddenWords(prompt)) {
      setError('Por favor, evita usar contenido inapropiado.');
      setLoading(false);
      return;
    }

    try {
      const generatedImageUrl = await query(prompt); // Llama a la función query
      setImageUrl(generatedImageUrl); // Establece la URL de la imagen generada
    } catch (err) {
      setError(err.message); // Maneja errores
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-black">Generador de Imágenes</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Escribe tu prompt aquí..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-black"
          rows={4}
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-black p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Generar Imagen
        </button>
      </form>
      {loading && <p className="mt-4 text-gray-600">Cargando...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Resultado:</h2>
          <div className="flex justify-center">
            <img 
              src={imageUrl} 
              alt="Imagen generada" 
              className="max-w-[300px] h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextToImage;

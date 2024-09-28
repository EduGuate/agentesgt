'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Para redirigir a la página de precios

const agents = [
  { title: 'Company Research Agent', description: 'Investiga a fondo una empresa y elabora un informe con datos demográficos, financiamiento, tráfico web y análisis de competidores.', image: '/images/research-agent.webp' },
  { title: 'Detector de Sentimientos', description: 'Analiza el tono emocional de textos.', image: '/images/sentiment-agent.webp' },
  { title: 'Generador de Texto', description: 'Genera textos coherentes rápidamente.', image: '/images/text-generator.jpg' },
  { title: 'Generador de Imágenes', description: 'Crea imágenes a partir de descripciones.', image: '/images/image-generator.jpg' },
  { title: 'Asistente Legal', description: 'Obtén asesoría legal preliminar.', image: '/images/legal-assistant.jpg' },
  { title: 'Análisis Financiero', description: 'Realiza predicciones financieras detalladas.', image: '/images/financial-analysis.jpg' },
];

const AgentesPremium = () => {
  const router = useRouter(); // Hook para redireccionar

  // Función para manejar la contratación del agente
  const handleHire = () => {
    router.push('/pricing'); // Redirigir a la página de precios
  };

  return (
    <div className="container mx-auto py-12 bg-white"> {/* Fondo blanco */}
      <h1 className="text-4xl font-bold text-center mb-8">Agentes Premium</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              src={agent.image}
              alt={agent.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">{agent.title}</h2>
            <p className="text-gray-600">{agent.description}</p>
            <button
              onClick={handleHire} // Llama a la función de contratación
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Contratar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentesPremium;

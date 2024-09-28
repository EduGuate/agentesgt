'use client';

import React from 'react';

const agents = [
  { title: 'Company Research Agent', description: 'Investiga a fondo una empresa y elabora un informe con datos demográficos, financiamiento, tráfico web y análisis de competidores.', image: '/images/research-agent.webp' },
  { title: 'Detector de Sentimientos', description: 'Analiza el tono emocional de textos.', image: '/images/sentiment-agent.webp' },
  { title: 'Generador de Texto', description: 'Genera textos coherentes rápidamente.', image: '/images/text-generator.jpg' },
  { title: 'Generador de Imágenes', description: 'Crea imágenes a partir de descripciones.', image: '/images/image-generator.jpg' },
  { title: 'Asistente Legal', description: 'Obtén asesoría legal preliminar.', image: '/images/legal-assistant.jpg' },
  { title: 'Análisis Financiero', description: 'Realiza predicciones financieras detalladas.', image: '/images/financial-analysis.jpg' },
];

const AgentesPremium = () => {
  // Función para redirigir a la página de precios (a implementar)
  const handleHire = () => {
    window.location.href = '/pricing'; // Redirigir a la página de precios
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Agentes Premium</h1> {/* Encabezado en negro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 text-black text-center">
            <img
              src={agent.image}
              alt={agent.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">{agent.title}</h2>
            <p className="text-black">{agent.description}</p> {/* Descripción en negro */}
            <button
              onClick={handleHire}
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

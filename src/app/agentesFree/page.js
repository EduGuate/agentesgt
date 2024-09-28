'use client';
import React, { useState } from 'react';
import { Search, Star, TrendingUp, Mail, Image, Calendar, Calculator, Languages, Music, Clock, Globe, BookOpen, Code, BarChart, Video } from 'lucide-react';

const agents = [
  {
    id: 1,
    name: 'Agente SEO',
    description: 'Optimiza tu contenido para buscadores.',
    icon: Search,
    features: ['Análisis de palabras clave', 'Sugerencias de optimización', 'Informes de rendimiento'],
  },
  {
    id: 2,
    name: 'Agente de Sentimientos',
    description: 'Analiza el sentimiento de tus textos.',
    icon: Star,
    features: ['Análisis de tono', 'Detección de emociones', 'Resúmenes de sentimiento'],
  },
  {
    id: 3,
    name: 'Agente Generador de Texto',
    description: 'Genera texto coherente a partir de prompts.',
    icon: TrendingUp,
    features: ['Generación de artículos', 'Creación de resúmenes', 'Asistente de escritura creativa'],
  },
  {
    id: 4,
    name: 'Agente de Correo',
    description: 'Ayuda a redactar y organizar correos electrónicos.',
    icon: Mail,
    features: ['Sugerencias de respuesta', 'Clasificación de correos', 'Recordatorios de seguimiento'],
  },
  {
    id: 5,
    name: 'Agente de Imagen',
    description: 'Analiza y describe imágenes.',
    icon: Image,
    features: ['Detección de objetos', 'Análisis de colores', 'Generación de descripciones'],
  },
  {
    id: 6,
    name: 'Agente de Calendario',
    description: 'Ayuda a organizar tu agenda y eventos.',
    icon: Calendar,
    features: ['Programación inteligente', 'Recordatorios personalizados', 'Sugerencias de horarios'],
  },
  {
    id: 7,
    name: 'Agente Calculador',
    description: 'Realiza cálculos y conversiones.',
    icon: Calculator,
    features: ['Cálculos matemáticos', 'Conversiones de unidades', 'Estadísticas básicas'],
  },
  {
    id: 8,
    name: 'Agente Traductor',
    description: 'Traduce texto entre diferentes idiomas.',
    icon: Languages,
    features: ['Traducción de texto', 'Detección de idioma', 'Pronunciación fonética'],
  },
  {
    id: 9,
    name: 'Agente de Música',
    description: 'Analiza y recomienda música.',
    icon: Music,
    features: ['Recomendaciones personalizadas', 'Análisis de géneros', 'Creación de playlists'],
  },
  {
    id: 10,
    name: 'Agente de Productividad',
    description: 'Ayuda a gestionar el tiempo y las tareas.',
    icon: Clock,
    features: ['Gestión de tareas', 'Técnicas de concentración', 'Análisis de productividad'],
  },
  {
    id: 11,
    name: 'Agente de Noticias',
    description: 'Resume y analiza noticias actuales.',
    icon: Globe,
    features: ['Resúmenes de noticias', 'Análisis de tendencias', 'Alertas personalizadas'],
  },
  {
    id: 12,
    name: 'Agente de Lectura',
    description: 'Ayuda a comprender y resumir textos.',
    icon: BookOpen,
    features: ['Resúmenes de libros', 'Análisis de comprensión', 'Recomendaciones de lectura'],
  },
  {
    id: 13,
    name: 'Agente de Código',
    description: 'Asiste en tareas de programación básicas.',
    icon: Code,
    features: ['Explicación de código', 'Sugerencias de debugging', 'Formateo de código'],
  },
  {
    id: 14,
    name: 'Agente de Datos',
    description: 'Ayuda a visualizar y analizar datos simples.',
    icon: BarChart,
    features: ['Creación de gráficos', 'Análisis estadístico básico', 'Limpieza de datos'],
  },
  {
    id: 15,
    name: 'Agente de Video',
    description: 'Analiza y describe contenido de video.',
    icon: Video,
    features: ['Resumen de contenido', 'Detección de escenas', 'Extracción de subtítulos'],
  },
  {
    id: 16,
    name: 'Texto a Imagen',
    description: 'Chat interactivo para consultas y asistencia.',
    icon: Code, // Asegúrate de importar el ícono que desees usar
    features: ['Crea tus mejores imagenes desde un texto de en lenguaje natural'],
  },
];

const AgentesFree = () => {
  const [activeAgent, setActiveAgent] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Sección adicional con texto relativo a los agentes */}
      <section className="mt-16 relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">¿Cómo funcionan los Agentes Gratuitos?</h2>
        <p className="text-center text-black mb-12">
          Los agentes gratuitos están diseñados para facilitar tus tareas cotidianas, brindándote acceso rápido y eficiente a herramientas avanzadas de IA.
        </p>
      </section>

      {/* Listado de Agentes Gratuitos */}
      <h1 className="text-4xl font-bold text-center mb-4 text-black">Agentes Gratuitos</h1>
      <p className="text-xl text-center mb-12 text-black">
        Descubre nuestros 15 agentes gratuitos y cómo pueden ayudarte en tus tareas diarias.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {agents.map((agent) => (
          <div 
            key={agent.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-4">
              <div className="flex justify-center mb-3">
                {React.createElement(agent.icon, { className: "w-8 h-8 text-blue-500" })}
              </div>
              <h2 className="text-lg font-semibold text-center mb-2 text-black">{agent.name}</h2>
              <p className="text-sm text-gray-600 text-center mb-3">{agent.description}</p>
              <button 
                className="w-full bg-blue-500 text-white py-1 px-2 rounded text-sm hover:bg-blue-600 transition"
                onClick={() => setActiveAgent(activeAgent === agent.id ? null : agent.id)}
              >
                {activeAgent === agent.id ? 'Ocultar' : 'Ver detalles'}
              </button>
            </div>
            {activeAgent === agent.id && (
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold mb-2 text-sm text-black">Características:</h3>
                <ul className="list-disc pl-5 text-sm text-black">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <button 
                  className="mt-3 w-full bg-green-500 text-white py-1 px-2 rounded text-sm hover:bg-green-600 transition"
                  onClick={() => window.location.href = '/chatsGratis/texToImage'}
                >
                  Usar Agente
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentesFree;
'use client';

import React from 'react';
import { Camera, UserCheck, Zap } from 'lucide-react';

const Pricing = () => {
  const handlePurchase = (tokens) => {
    alert(`Has comprado ${tokens} tokens!`);
  };

  const pricingOptions = [
    { tokens: 10, price: 5, popular: false },
    { tokens: 25, price: 10, popular: true },
    { tokens: 50, price: 18, popular: false },
    { tokens: 100, price: 35, popular: false },
  ];

  const agentOptions = [
    { name: "Agente Básico", price: 5, features: ["Consultas simples", "Respuestas rápidas", "Disponibilidad 24/7"] },
    { name: "Agente Pro", price: 15, features: ["Análisis avanzado", "Personalización", "Soporte prioritario"] },
    { name: "Agente Empresarial", price: 50, features: ["Integración completa", "Acceso API", "Entrenamiento personalizado"] },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-black mb-16">Planes y Precios</h1>

      {/* Sección de Tokens */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center text-black mb-10">Precios de Tokens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`border rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl ${option.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {option.popular && <span className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-2 rounded-full mb-2 inline-block">Popular</span>}
              <h2 className="text-2xl font-semibold text-black mb-4">{option.tokens} Tokens</h2>
              <p className="text-3xl font-bold text-black mb-6">${option.price}</p>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => handlePurchase(option.tokens)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Agentes */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center text-black mb-10">Planes de Agentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agentOptions.map((agent, index) => (
            <div key={index} className="border rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl">
              <div className="mb-4">
                {index === 0 ? <Camera className="mx-auto text-black" size={48} /> : 
                 index === 1 ? <UserCheck className="mx-auto text-black" size={48} /> : 
                               <Zap className="mx-auto text-black" size={48} />}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{agent.name}</h3>
              <p className="text-2xl font-bold text-black mb-4">${agent.price}/mes</p>
              <ul className="text-left mb-6">
                {agent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Imágenes */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-black mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="relative overflow-hidden rounded-lg group">
              <img 
                src={`/api/placeholder/300/200`} 
                alt={`Servicio ${item}`} 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-black text-lg font-semibold">Servicio {item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;

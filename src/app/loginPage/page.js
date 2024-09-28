// src/app/LoginPage.js

import React from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white"> {/* Aplicar fondo blanco y centrar contenido */}
      <LoginComponent />
    </div>
  );
};

export default LoginPage;

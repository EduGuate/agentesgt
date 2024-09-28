'use client'; // Este componente se ejecuta en el cliente

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importar el componente de imagen de Next.js

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Para redirigir después de iniciar sesión

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/agentesFree'); // Redirige a la página de tabs después de iniciar sesión
      
    } catch (error) {
      setError(error.message); // Muestra el error si falla el inicio de sesión
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        {/* Branding: Logo de la aplicación */}
        <Image
          src="/path/to/your/logo.png" // Cambia esto a la ruta de tu logo
          alt="Logo de la aplicación"
          width={150} // Ancho del logo
          height={50} // Alto del logo
          style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} // Efecto hover
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} // Efecto hover al pasar el mouse
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Regresa a tamaño normal
        />
        <Typography component="h1" variant="h5" sx={{ mt: 2, color: 'black' }}>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '1rem' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
          {/* Botón de Registro */}
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => router.push('/register')} // Cambia '/register' a la ruta de tu página de registro
          >
            ¿No tienes una cuenta? Regístrate
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginComponent;

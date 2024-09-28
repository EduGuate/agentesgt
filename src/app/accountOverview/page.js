// src/app/components/AccountOverview.js
"use client";

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Avatar, Paper } from '@mui/material';
import { updateProfile, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContent'; // Importa el contexto
import { app } from '../../firebase'; // Asegúrate de que esta ruta sea correcta
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { user, loading } = useAuth(); // Obtén el usuario y el estado de carga
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || '');
  const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || '');
  const [emailForReset, setEmailForReset] = useState('');
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(app); // Cambia aquí si necesitas usar otra forma de cerrar sesión
    router.push('/loginPage'); // Redirige a la página de inicio de sesión
  };

  const handleUpdateProfile = async () => {
    if (user) {
      await updateProfile(user, {
        displayName: newDisplayName,
        photoURL: newPhotoURL
      });
      alert('Perfil actualizado con éxito!');
    }
  };

  const handlePasswordReset = async () => {
    if (emailForReset) {
      await sendPasswordResetEmail(app, emailForReset);
      alert('Correo de recuperación de contraseña enviado!');
    } else {
      alert('Por favor ingresa un correo electrónico.');
    }
  };

  if (loading) {
    return <Box sx={{ padding: 4 }}>Cargando...</Box>; // Muestra un mensaje de carga si el usuario aún se está autenticando
  }

  return (
    <Box sx={{ padding: 4, color: 'black' }}>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuario
      </Typography>

      {user && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box display="flex" alignItems="center">
            <Avatar alt={user.displayName || 'Usuario'} src={user.photoURL} sx={{ width: 56, height: 56, marginRight: 2 }} />
            <Typography variant="h6">{user.displayName || 'Usuario'}</Typography>
          </Box>

          <Typography variant="subtitle1" color="textSecondary">
            Correo Electrónico: {user.email}
          </Typography>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Información de la Cuenta
            </Typography>
            <TextField 
              label="Nombre de Usuario" 
              value={newDisplayName} 
              onChange={(e) => setNewDisplayName(e.target.value)} 
              fullWidth 
              margin="normal" 
              variant="outlined" 
            />
            <TextField 
              label="URL de Foto de Perfil" 
              value={newPhotoURL} 
              onChange={(e) => setNewPhotoURL(e.target.value)} 
              fullWidth 
              margin="normal" 
              variant="outlined" 
            />
          </Box>

          <Button variant="contained" color="primary" onClick={handleUpdateProfile} sx={{ marginTop: 3 }}>
            Editar Perfil
          </Button>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recuperar Contraseña
            </Typography>
            <TextField 
              label="Correo Electrónico" 
              value={emailForReset} 
              onChange={(e) => setEmailForReset(e.target.value)} 
              fullWidth 
              margin="normal" 
              variant="outlined" 
            />
            <Button variant="contained" color="secondary" onClick={handlePasswordReset} sx={{ marginTop: 2 }}>
              Enviar Correo de Recuperación
            </Button>
          </Box>

          <Button variant="contained" color="primary" onClick={handleLogout} sx={{ marginTop: 3 }}>
            Cerrar Sesión
          </Button>
        </Paper>
      )}
    </Box>
  );
}
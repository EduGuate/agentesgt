"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Avatar, Paper } from '@mui/material';
import { getAuth, onAuthStateChanged, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../firebase'; // Asegúrate de que esta ruta sea correcta
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [newDisplayName, setNewDisplayName] = useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');
  const [emailForReset, setEmailForReset] = useState('');
  const router = useRouter();

  const auth = getAuth(app); // Inicializa getAuth con la app de Firebase

  useEffect(() => {
    // Observa el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.push('/loginPage'); // Redirige a la página de inicio de sesión si no hay usuario
      } else {
        setNewDisplayName(currentUser.displayName || '');
        setNewPhotoURL(currentUser.photoURL || '');
      }
    });

    // Limpia el suscriptor al desmontar el componente
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/loginPage'); // Redirige a la página de inicio de sesión
  };

  const handleUpdateProfile = async () => {
    if (user) {
      await updateProfile(user, {
        displayName: newDisplayName,
        photoURL: newPhotoURL
      });
      setUser({ ...user, displayName: newDisplayName, photoURL: newPhotoURL });
      alert('Perfil actualizado con éxito!');
    }
  };

  const handlePasswordReset = async () => {
    if (emailForReset) {
      await sendPasswordResetEmail(auth, emailForReset);
      alert('Correo de recuperación de contraseña enviado!');
    } else {
      alert('Por favor ingresa un correo electrónico.');
    }
  };

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

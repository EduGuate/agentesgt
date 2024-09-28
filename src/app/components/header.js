"use client";

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '../../firebase'; // Asegúrate de que esta ruta sea correcta

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null); // Para el menú del perfil
  const router = useRouter();

  const auth = getAuth(app); // Inicializa getAuth con la app de Firebase

  useEffect(() => {
    // Observa el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Limpia el suscriptor al desmontar el componente
    return () => unsubscribe();
  }, [auth]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/loginPage'); // Redirige a la página de inicio de sesión
  };

  const handleLogoClick = () => {
    router.push('/'); // Redirige a la página principal
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget); // Abre el menú del perfil
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null); // Cierra el menú del perfil
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, cursor: 'pointer' }} 
          onClick={handleLogoClick} // Redirige a la página principal al hacer clic en "AGT"
        >
          AGT
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="/agentesFree">Agentes Gratuitos</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="/agentesPremium">Agentes Premium</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="/pricing">Precios</MenuItem>
          {user ? (
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          ) : (
            <MenuItem onClick={handleMenuClose} component="a" href="/loginPage">Login</MenuItem>
          )}
        </Menu>
        <Button color="inherit" href="/agentesFree" sx={{ display: { xs: 'none', md: 'block' } }}>Agentes Gratuitos</Button>
        <Button color="inherit" href="/agentesPremium" sx={{ display: { xs: 'none', md: 'block' } }}>Agentes Premium</Button>
        <Button color="inherit" href="/pricing" sx={{ display: { xs: 'none', md: 'block' } }}>Precios</Button>
        
        {user ? (
          <>
            <Avatar
              alt={user.displayName || 'Usuario'}
              src={user.photoURL}
              onClick={handleProfileMenuOpen} // Abre el menú de perfil al hacer clic en el Avatar
              sx={{ ml: 2, cursor: 'pointer' }}
            />
            <Menu
              anchorEl={profileMenuAnchorEl}
              open={Boolean(profileMenuAnchorEl)}
              onClose={handleProfileMenuClose}
            >
              <MenuItem onClick={handleProfileMenuClose} component="a" href="/accountOverview">Visión General de la Cuenta</MenuItem>
              <MenuItem onClick={handleProfileMenuClose} component="a" href="/profile">Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" href="/loginPage" sx={{ display: { xs: 'none', md: 'block' } }}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

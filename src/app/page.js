"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Container, Card, CardContent, CardMedia, Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Header from '../app/components/header';

let theme = createTheme({
  palette: {
    primary: {
      main: '#005eb8',
    },
    secondary: {
      main: '#ffd700',
    },
    background: {
      default: '#ffffff',
      paper: '#f0f8ff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme);

export default function LandingPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: 'linear-gradient(rgba(0, 94, 184, 0.7), rgba(0, 94, 184, 0.7)), url(/images/guatemala-background.jpg)',
            height: { xs: 'calc(100vh - 56px)', sm: '100vh' },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Box sx={{ maxWidth: '800px', padding: { xs: '1rem', sm: '2rem' } }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              La IA al servicio de Guatemala
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              50 agentes de IA para mejorar tus tareas diarias, desde SEO hasta análisis de sentimientos.
            </Typography>
            <Button variant="contained" color="secondary" href="#free-agents" sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, fontWeight: 'bold', py: 1, px: 3, width: { xs: '100%', sm: 'auto' } }}>
              Explorar Agentes Gratuitos
            </Button>
            <Button variant="outlined" color="inherit" href="/agentesFree" sx={{ fontWeight: 'bold', py: 1, px: 3, borderWidth: 2, width: { xs: '100%', sm: 'auto' } }}>
              Ver Precios
            </Button>
          </Box>
        </Box>

        {/* Free Agents Section */}
        <Container sx={{ py: { xs: 4, md: 8 } }} id="free-agents">
          <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main', mb: { xs: 3, md: 6 } }}>
            Agentes Gratuitos
          </Typography>
          <Grid container spacing={4}>
            {agents.slice(0, 3).map((agent, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={agent.image}
                    alt={agent.title}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      {agent.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {agent.description}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start', mt: 'auto' }}>
                      Contratar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Premium Agents Section */}
        <Box sx={{ backgroundColor: 'background.paper', py: { xs: 4, md: 8 } }} id="premium-agents">
          <Container>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main', mb: { xs: 3, md: 6 } }}>
              Agentes Premium
            </Typography>
            <Grid container spacing={4}>
              {agents.slice(3, 6).map((agent, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={agent.image}
                      alt={agent.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        {agent.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {agent.description}
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start', mt: 'auto' }}>
                        Contratar
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Pricing Section */}
        <Container sx={{ py: { xs: 4, md: 8 } }} id="pricing">
          <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main', mb: { xs: 3, md: 6 } }}>
            Planes de Precios
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: 'Gratis', price: 'Q0/mes', description: 'Acceso a 5 agentes gratuitos y hasta 10 interacciones por agente.', buttonText: 'Comenzar Gratis', buttonVariant: 'outlined' },
              { title: 'Pro', price: 'Q75/mes', description: 'Acceso a todos los agentes premium y hasta 50 interacciones mensuales.', buttonText: 'Comprar', buttonVariant: 'contained', featured: true },
              { title: 'Enterprise', price: 'Q200/mes', description: 'Acceso ilimitado a todos los agentes y soporte prioritario.', buttonText: 'Comprar', buttonVariant: 'contained' },
            ].map((tier, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card elevation={tier.featured ? 5 : 3} sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: '0.3s', 
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                  ...(tier.featured && { bgcolor: 'primary.main', color: 'white' })
                }}>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: tier.featured ? 'white' : 'primary.main' }}>
                      {tier.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {tier.description}
                    </Typography>
                    <Typography variant="h3" sx={{ my: 2, color: tier.featured ? 'secondary.main' : 'secondary.main', fontWeight: 'bold' }}>
                      {tier.price}
                    </Typography>
                    <Button variant={tier.buttonVariant} color={tier.featured ? "secondary" : "primary"} size="large" sx={{ mt: 2, width: '100%' }}>
                      {tier.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const agents = [
  { title: 'Company Research Agent', description: 'Investiga a fondo una empresa y elabora un informe con datos demográficos, financiamiento, tráfico web y análisis de competidores.', image: '/images/research-agent.webp' },
  { title: 'Detector de Sentimientos', description: 'Analiza el tono emocional de textos.', image: '/images/sentiment-agent.webp' },
  { title: 'Generador de Texto', description: 'Genera textos coherentes rápidamente.', image: '/images/text-generator.jpg' },
  { title: 'Generador de Imágenes', description: 'Crea imágenes a partir de descripciones.', image: '/images/image-generator.jpg' },
  { title: 'Asistente Legal', description: 'Obtén asesoría legal preliminar.', image: '/images/legal-assistant.jpg' },
  { title: 'Análisis Financiero', description: 'Realiza predicciones financieras detalladas.', image: '/images/financial-analysis.jpg' },
];
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutSection: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }}>
      <Typography variant="h4" component="h1">
        Sobre Mim
      </Typography>
      <Typography variant="body1" paragraph>
        Olá, sou um desenvolvedor frontend com experiência em React, Next.js e mais.
      </Typography>
    </Box>
  );
};

export default AboutSection;

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contato
      </Typography>
      <Button variant="contained" color="primary">Entre em Contato</Button>
    </Box>
  );
};

export default ContactSection;

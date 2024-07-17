import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center', mt: 'auto' }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} Kerman Mendes</Typography>
  </Box>
);

export default Footer;

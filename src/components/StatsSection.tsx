import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const stats = [
  { value: '12', label: 'Years Of Experience' },
  { value: '100%', label: 'Client On Worldwide' },
  { value: '769', label: 'Project Done' },
  { value: '5 Star', label: 'Ratings (2k+ Review)' },
];

const StatsSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#ffebc8', py: 8 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h4" component="div" gutterBottom>{stat.value}</Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;

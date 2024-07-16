import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import ImageBB from '../../../public/projects/busca-buffet.png';
import ImageFA from '../../../public/projects/fenix-ato.png';
import ImageNR from '../../../public/projects/nest-rental.png';
import ImageDA from '../../../public/projects/dandrade.png';

const projects = [
  {
    image: ImageNR.src,
    title: 'Nest Rental',
    description: 'Descrição do Projeto 3',
    githubLink: 'https://github.com/KermanJR/nest-rental-frontend',
    liveLink: 'https://nestrental.com.br',
    category: 'FrontEnd',
  },
  {
    image: ImageFA.src,
    title: 'Sistema Fênix Ato',
    description: 'Descrição do Projeto 2',
    githubLink: 'https://github.com/KermanJR/fenix_ato_reactjs',
    liveLink: 'https://fenix.ato.br/cliente',
    category: 'FrontEnd',
  },
  {
    image: ImageBB.src,
    title: 'Busca Buffet',
    description: '',
    githubLink: 'https://github.com/KermanJR/projeto_buffet',
    liveLink: 'https://buscabuffet.com.br',
    category: 'FrontEnd',
  },
  {
    image: ImageDA.src,
    title: 'D. Andrade',
    description: 'Projeto em Andamento',
    githubLink: '',
    liveLink: 'https://dandrade.com.br/',
    category: 'FrontEnd',
  },
  {
    image: '/images/project4.jpg',
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4',
    githubLink: 'https://github.com/seu-repositorio/projeto4',
    liveLink: 'https://seu-site.com/projeto4',
    category: 'PowerBI',
  },
  // Adicione mais projetos conforme necessário
];

const ProjectSection: React.FC = () => {
  return (
    <Box id="projetos" sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'left',
          marginBottom: 4,
          fontSize: '4rem',
          fontWeight: '700',
          marginLeft: '2rem',
        }}
      >
        <TypingAnimation text="Meus Projetos" />
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          width: '95%',
          borderRadius: '20px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0rem',
          background: '#333333',
          height: '70vh',
        }}
      >
        {projects.map((project, index) => (
          <Grid item key={index} sx={{ width: '30%', minWidth: '250px' }}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;

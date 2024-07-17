import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useLanguage } from '@/contexts/LanguageContext';
import pt from '../../../src/components/locales/pt.json';
import en from '../../../src/components/locales/en.json';
import es from '../../../src/components/locales/es.json';

const languages = { pt, en, es };

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, githubLink, liveLink }) => {
  const { language } = useLanguage();
  const translations = languages[language];
  const isInProgress = description === translations.em_progresso;

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        height: '40vh',
        '&:hover .overlay': {
          opacity: 1,
        },
      }}
    >
      <Box component="img" src={image} alt={title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={isInProgress ? '#' : githubLink}
          target={isInProgress ? '' : '_blank'}
          sx={{ mb: 1 }}
          disabled={isInProgress}
          startIcon={isInProgress ? <LockIcon /> : null}
        >
          {isInProgress ? translations.em_progresso : 'GitHub'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={isInProgress ? '#' : liveLink}
          target={isInProgress ? '' : '_blank'}
          disabled={isInProgress}
          startIcon={isInProgress ? <LockIcon /> : null}
        >
          {isInProgress ? translations.em_progresso : 'Live Site'}
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
  };
  onOpenModal: (project: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: "40vh",
          borderRadius: "10px",
          objectFit: 'cover',
          textAlign: 'center'
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          borderRadius: "10px",
          opacity: 0,
          transition: "opacity 0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: 'center',
          padding: '.5rem'
        }}
      >
        <Typography variant="h6">{project.title}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onOpenModal(project)}
        >
          Ver Mais
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;

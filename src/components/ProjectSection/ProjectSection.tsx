import React, { useState } from "react";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import Slider from "react-slick";
import ProjectCard from "../ProjectCard/ProjectCard";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { useLanguage } from "../../contexts/LanguageContext";
import pt from "../../../src/components/locales/pt.json";
import en from "../../../src/components/locales/en.json";
import es from "../../../src/components/locales/es.json";
import ImageBB from "../../../public/projects/busca-buffet.png";
import ImageFA from "../../../public/projects/fenix-ato.png";
import ImageNR from "../../../public/projects/nest-rental.png";
import ImageDA from "../../../public/projects/dandrade.png";
import { PreviousArrow, NextArrow } from "../Arrows/Arrows";
import styles from './ProjectSection.module.css'

const languages = { pt, en, es };

const projects = [
  {
    image: ImageNR.src,
    title: "Nest Rental",
    description: "Descrição do Projeto 3",
    githubLink: "https://github.com/KermanJR/nest-rental-frontend",
    liveLink: "https://nestrental.com.br",
    category: "FrontEnd",
  },
  {
    image: ImageFA.src,
    title: "Sistema Fênix Ato",
    description: "Descrição do Projeto 2",
    githubLink: "https://github.com/KermanJR/fenix_ato_reactjs",
    liveLink: "https://fenix.ato.br/cliente",
    category: "FrontEnd",
  },
  {
    image: ImageBB.src,
    title: "Busca Buffet",
    description: "Projeto em Andamento",
    githubLink: "https://github.com/KermanJR/projeto_buffet",
    liveLink: "https://buscabuffet.com.br",
    category: "FrontEnd",
  },
  {
    image: ImageDA.src,
    title: "D. Andrade",
    description: "Projeto em Andamento",
    githubLink: "",
    liveLink: "https://dandrade.com.br/",
    category: "FrontEnd",
  },

];

const ProjectSection: React.FC = () => {
  const { language } = useLanguage();
  const translations = languages[language];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      id="projetos"
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: '2rem 4.5rem',
      }}
      className={styles.containerBox}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: {sm: "right", lg: 'left', md: 'left'},
          marginBottom: 4,
          fontSize: { xs: "2.5rem", md: "2.5rem", lg: "3rem" },
          fontWeight: "700",
        }}
      >
        <TypingAnimation text={translations.meus_projetos} />
      </Typography>
      <ButtonGroup variant="outlined" sx={{ marginBottom: 2, alignSelf: 'left' }}>
        <Button onClick={() => setSelectedCategory(null)}>
          Todos
        </Button>
        <Button onClick={() => setSelectedCategory('FrontEnd')}>
          FrontEnd
        </Button>
        <Button onClick={() => setSelectedCategory('BackEnd')}>
          BackEnd
        </Button>
        <Button onClick={() => setSelectedCategory('IA')}>
          IA
        </Button>
        <Button onClick={() => setSelectedCategory('PowerBI')}>
          PowerBI
        </Button>
      </ButtonGroup>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          background: "#333333",
          borderRadius: "20px",
          padding: 2,
        }}
      >
        {filteredProjects.length > 0? <Slider {...settings}>
          {filteredProjects.map((project, index) => (
            <Box key={index} sx={{ padding: 2 }}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            </Box>
          ))}
        </Slider>: 
         <Box  sx={{ padding: 2, height: '45.3vh', textAlign: 'center', margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Typography sx={{color: 'white'}}>A ser adicionado...</Typography>
       </Box>}
        
      </Box>
    </Box>
  );
};

export default ProjectSection;

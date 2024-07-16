import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import MyPhoto from "../../public/my-photo.png";
import SkillBar from "./SkillBar/SkillBar";
import TypingAnimation from "./TypingAnimation/TypingAnimation";

const HomeSection: React.FC = () => {
  return (
    <Box
      id="inicio"
      sx={{
        height: { xs: "auto", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "2rem", md: "7rem" },
        overflow: { xs: "visible", md: "hidden" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4} sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: { xs: "2rem", md: "4rem" } }}
          >
            <TypingAnimation text="Sou o Kerman, Desenvolvedor Web Front End" />
          </Typography>
          <Typography variant="body1" paragraph>
            Tenho 24 anos, sou desenvolvedor Frontend com 3 anos de experiência utilizando tecnologias como
            ReactJS, NextJS e React Native. Possuo um entendimento sólido de
            arquiteturas de microsserviços e MVC, além de conhecimento em Backend. Aplico consistentemente os
            princípios SOLID para garantir um código coeso, flexível e fácil de
            manter. Sou apaixonado em programação Web e busco sempre aprimorar minhas habilidades
            para contribuir com soluções web inovadoras e eficientes.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
            <Button variant="contained" color="primary">
              Ver Projetos
            </Button>
            <Button variant="outlined" color="primary">
              Ver todas as Skills
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", width: { xs: "100%", md: "33%" } }}>
          <Box
            component="img"
            src={MyPhoto.src}
            alt="Profile"
            sx={{
              borderRadius: "50%",
              width: { xs: "60%", md: "100%" },
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: "center",
            width: { xs: "100%", md: "33%" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "left", fontWeight: "700" }}
          >
            Principais Skills
          </Typography>
          <SkillBar skill="ReactJS" level={90} color="#FFD700" />
          <SkillBar skill="NextJS" level={85} color="#FFA500" />
          <SkillBar skill="NodeJS" level={80} color="#FF4500" />
          <SkillBar skill="Docker" level={75} color="#c45f3a" />
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "1rem", textAlign: "left" }}
          >
            ...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection;

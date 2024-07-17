import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RadarChart from "../RadarChart/RadarChart";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import styles from './SkillSection.module.css'

const frontendData = {
  labels: ["ReactJS", "NextJS", "HTML/CSS", "JavaScript", "TypeScript"],
  datasets: [
    {
      label: "Frontend",
      data: [90, 85, 95, 90, 80],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const backendData = {
  labels: ["NodeJS", "ExpressJS", "MongoDB", "SQL", "REST APIs"],
  datasets: [
    {
      label: "Backend",
      data: [80, 75, 70, 65, 85],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const otherData = {
  labels: ["Docker", "Git", "CI/CD", "Testing", "Cloud"],
  datasets: [
    {
      label: "Outros",
      data: [75, 85, 70, 65, 60],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

const SkillSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: '2rem 2.6rem',
      }}
      className={styles.containerBox}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "left",
          marginBottom: 0,
          fontSize: "2.5rem",
          fontWeight: "700",
          marginLeft: "2rem",
        }}
        className={styles.titleBox}
      >
        <TypingAnimation text="Minhas Skills" />
      </Typography>
      <Box
        sx={{
          width: "97%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "1rem",
          margin: "1rem auto",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "30%" }, marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Frontend
          </Typography>
          <RadarChart data={frontendData} />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Backend
          </Typography>
          <RadarChart data={backendData} />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Outros
          </Typography>
          <RadarChart data={otherData} />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillSection;

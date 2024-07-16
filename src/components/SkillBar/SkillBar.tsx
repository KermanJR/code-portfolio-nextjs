import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SkillBarProps {
  skill: string;
  level: number; // Valor entre 0 e 100
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color }) => {
  const [filledDots, setFilledDots] = useState(0);
  const totalDots = 20; // Número total de bolinhas

  useEffect(() => {
    const fillLevel = Math.round((level / 100) * totalDots);
    setFilledDots(fillLevel);
  }, [level]);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body1" sx={{ textAlign: "left" }}>
        {skill}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          borderRadius: "4px",
          boxShadow: "1px 1px 2px 1px #929292",
          background: "#333333",
          padding: ".5rem",
        }}
      >
        {[...Array(totalDots)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: index < filledDots ? color : "#e0e0e0",
              transition: "background-color 0.5s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillBar;

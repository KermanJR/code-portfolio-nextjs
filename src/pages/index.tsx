import React, { useState, useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import SimpleSlider from '@/components/Slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeSection from '../components/HomeSection/HomeSection';
import ProjectsSection from '../components/ProjectSection/ProjectSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import SkillSection from '@/components/SkillSection/SkillSection';

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sliderRef = useRef<{ slickGoTo: (index: number) => void }>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Box sx={{ height: '100vh', overflow: isMobile ? 'auto' : 'hidden' }}>
      <Header currentSection={currentSection} navigateToSection={handleSectionChange} />
      <Box sx={{ height: isMobile ? 'auto' : 'calc(100vh - 64px)', width: '100%' }}>
        {isMobile ? (
          <>
            <Box id="inicio">
              <HomeSection />
            </Box>
            <Box id="projetos">
              <ProjectsSection />
            </Box>
            <Box id="habilidades">
              <SkillSection />
            </Box>
            <Box id="sobre">
              <ContactSection />
            </Box>
          </>
        ) : (
          <SimpleSlider ref={sliderRef} onSectionChange={setCurrentSection} />
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

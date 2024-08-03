import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../../../public/logo.png';
import styles from './Header.module.css';

const sections = ['Início', 'Projetos', 'Habilidades', 'Sobre Mim'];

interface HeaderProps {
  currentSection: number;
  navigateToSection: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, navigateToSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigate = (index: number) => {
    navigateToSection(index);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" className={styles.app}>
        <Toolbar className={styles.appToolbar} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box component="img" src={Logo.src} alt="Profile" sx={{ width: '100%', maxWidth: 120 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '2.5rem', textAlign: 'center' }}>
            {sections.map((section, index) => (
              <Button
                key={section}
                color="inherit"
                onClick={() => navigateToSection(index)}
                sx={{ color: currentSection === index ? '#ff9900' : '#000' }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem', justifyContent: 'end' }}>
            <Button variant="outlined" color="secondary" sx={{ borderRadius: 5, width: 150 }}>
              Download CV
            </Button>
            <Button variant="outlined" color="secondary" sx={{ borderRadius: 5, width: 120 }}>
              Contato
            </Button>
          </Box>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {sections.map((section, index) => (
              <ListItem button key={section} onClick={() => handleNavigate(index)}>
                <ListItemText primary={section} />
              </ListItem>
            ))}
            <ListItem button>
              <Button variant="outlined" color="secondary" sx={{ borderRadius: 5, width: '100%' }}>
                Download CV
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="outlined" color="secondary" sx={{ borderRadius: 5, width: '100%' }}>
                Contato
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

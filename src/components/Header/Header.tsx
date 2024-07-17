import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../../../public/logo.png";
import styles from "./Header.module.css";

const sections = ["Início", "Projetos", "Habilidades", "Sobre Mim"];

interface HeaderProps {
  currentSection: number;
  navigateToSection: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentSection,
  navigateToSection,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleNavigate = (index: number) => {
    navigateToSection(index);
    setDrawerOpen(false);
  };

  const handleContactClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContactClose = () => {
    setAnchorEl(null);
  };

  const handleDownloadCV = async () => {
    const response = await fetch('../../public/curriculo_kerman.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <AppBar position="static" className={styles.app}>
        <Toolbar
          className={styles.appToolbar}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component="img"
            src={Logo.src}
            alt="Profile"
            sx={{ width: "100%", maxWidth: 120, transform: 'scale(1.5)', objectFit: 'contain', marginTop: '1.875rem'}}
            className={styles.logo}
          />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "2.5rem",
              textAlign: "center",
            }}
          >
            {sections.map((section, index) => (
              <Button
                key={section}
                color="inherit"
                onClick={() => handleNavigate(index)}
                sx={{ color: currentSection === index ? "#ff9900" : "#000" }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "1rem",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 5, width: 150 }}
              //onClick={handleDownloadCV}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 5, width: 120 }}
              onClick={handleContactClick}
            >
              Contato
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleContactClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{marginLeft: '-3rem', marginTop: '1rem'}}
            >
              <Box sx={{ p: 2 }}>
                <Typography sx={{ p: 1 }}>
                  <LinkedInIcon /> LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/kerman-mendes-4322401bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kerman Mendes
                  </a>
                </Typography>
                <Typography sx={{ p: 1 }}>
                  <GitHubIcon /> GitHub:{" "}
                  <a
                    href="https://github.com/KermanJR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @KermanJR
                  </a>
                </Typography>
                <Typography sx={{ p: 1 }}>
                  <EmailIcon /> Email:{" "}
                  <a href="mailto:kermanpereira@gmail.com">
                    kermanpereira@gmail.com
                  </a>
                </Typography>
              </Box>
            </Popover>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {sections.map((section, index) => (
              <ListItem
                button
                key={section}
                onClick={() => handleNavigate(index)}
              >
                <ListItemText primary={section} />
              </ListItem>
            ))}
            <ListItem button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: 5, width: "100%" }}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </ListItem>
            <ListItem button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: 5, width: "100%" }}
                //onClick={handleContactClick}
              >
                Contato
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleContactClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ p: 1 }}>
                    <LinkedInIcon /> LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/seu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      seu-perfil
                    </a>
                  </Typography>
                  <Typography sx={{ p: 1 }}>
                    <GitHubIcon /> GitHub:{" "}
                    <a
                      href="https://github.com/seu-usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      seu-usuario
                    </a>
                  </Typography>
                  <Typography sx={{ p: 1 }}>
                    <WhatsAppIcon /> WhatsApp: (XX) XXXXX-XXXX
                  </Typography>
                  <Typography sx={{ p: 1 }}>
                    <EmailIcon /> Email:{" "}
                    <a href="mailto:seuemail@example.com">
                      seuemail@example.com
                    </a>
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

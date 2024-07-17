import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LanguageProvider } from '@/contexts/LanguageContext';

const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif"
  },
  palette: {
    primary: {
      main: '#ff9900',
    },
    secondary: {
      main: '#000',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </LanguageProvider>
  
  );
}

export default MyApp;

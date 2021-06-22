import { useState } from 'react';
import './services/firebase';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Routes } from './routes';
import { Switcher } from './components/Switcher';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  function toggleTheme() {
    setTheme(theme.title==='light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Switcher 
          onChange={toggleTheme}
          checked={theme.title==='dark'}  
        />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

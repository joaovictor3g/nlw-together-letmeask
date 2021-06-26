import './services/firebase';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Routes } from './routes';
import { Switcher } from './components/Switcher';
import { AuthProvider } from './contexts/AuthContext';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('letmeask:theme', light);

  function toggleTheme() {
    setTheme(theme.title==='light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Switcher 
          onClick={toggleTheme}
        />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

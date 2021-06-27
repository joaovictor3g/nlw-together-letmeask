import { useTheme } from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi'
import { Container } from "./styles";

interface ISwitcher {
  onClick(): void;
}

export function Switcher({ onClick }: ISwitcher) {
  const theme = useTheme();

  return (
    <Container title={theme.title==='dark' ? 'Mudar para modo light' : 'Mudar para modo dark'}>
      <button onClick={onClick}>
       {theme.title==='light' ? (
         <FiSun size={24} color="#FFF"/>
       ) : (
          <FaMoon size={24} color="#171923"/>
       )}
      </button>
    </Container>
  )
}
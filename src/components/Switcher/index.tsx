import { useTheme } from 'styled-components';
import Switch from "react-switch";
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { Container } from "./styles";

interface ISwitcher {
  onClick(): void;
}

export function Switcher({ onClick }: ISwitcher) {
  const theme = useTheme();

  return (
    <Container title={theme.title==='dark' ? 'Mudar para modo light' : 'Mudar para modo dark'}>
      <button onClick={onClick}>
        <WiMoonAltThirdQuarter 
          size={30} 
          color={theme.title==='dark' ? '#FFF' : '#000'}
        />
      </button>
    </Container>
  )
}
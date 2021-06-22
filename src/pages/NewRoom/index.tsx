import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Container } from "./styles";

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import { useAuthContext } from '../../contexts/AuthContext';

export function NewRoom() {
  const { user } = useAuthContext();

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
            
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </Container>
  );
}
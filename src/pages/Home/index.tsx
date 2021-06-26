import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Container } from "./styles";

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import whiteLogoImg from '../../assets/logobranca.svg';
import googleIconImg from '../../assets/google-icon.svg';
import { useAuthContext } from '../../contexts/AuthContext';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';

export function Home() {
  const history = useHistory();
  const theme = useTheme();
  
  const { handleSignIn, user } = useAuthContext();

  const [roomCode, setRoomCode] = useState('');

  async function handleNavigateToNewRoom() {
    if(!user) {
      await handleSignIn();
    }

    history.push('/new-room');
    
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if(roomCode.trim()==='') 
      return;

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      return alert('Room does not exists')
    }

    if(roomRef.val().endedAt) {
      return alert('Room already closed')
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          {theme.title==='light' ? (
            <img src={logoImg} alt="Letmeask" />
          ) : (
            <img src={whiteLogoImg} alt="Letmeask" />
          )}
          <button 
            className="create-room"
            onClick={handleNavigateToNewRoom}  
          >
            <img src={googleIconImg} alt="Logo do google"/>
            Crie uma sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              onChange={e => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </Container>
  );
}
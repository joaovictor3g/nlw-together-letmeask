import { FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { Container } from "./styles";

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import whiteLogoImg from '../../assets/logobranca.svg';
import { database } from '../../services/firebase';
import { useAuthContext } from '../../contexts/AuthContext';

export function NewRoom() {
  const theme = useTheme();
  const history = useHistory();

  const { user } = useAuthContext();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if(newRoom.trim()==='') 
      return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              onChange={e => setNewRoom(e.target.value)}
              value={newRoom}
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
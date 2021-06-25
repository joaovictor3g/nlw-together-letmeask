import toast, { Toaster } from 'react-hot-toast'
import { Container } from "./styles";

import logoImg from '../../assets/logo.svg';
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { useParams } from "react-router";
import { FormEvent, useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { database } from '../../services/firebase';

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    content: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

type RoomParams = {
  id: string;
}

type Question = {
  id: string;
  author: {
    name: string;
    content: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export function Room() {
  const { user } = useAuthContext();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('');
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();

      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered
        }
      });

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })
  }, [roomId]);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    
    if(newQuestion.trim()==='') return;

    if(!user) {
      return toast.error('Não funcionou ;(')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    };

    await database.ref(`/rooms/${roomId}/questions`).push(question);

    setNewQuestion('');

    toast.success('Comentário realizado com sucesso')
  }

  return (
    <Container>
      <Toaster position="top-left"/>
      <header>
        <div className="content">
          <img src={logoImg} alt="logo"/>

          <RoomCode 
            code={roomId}
          />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea 
            placeholder="O que você quer perguntar?"
            onChange={e=>setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name}/>
                <span>{user.name}</span>
              </div>
            ) : <span>Para enviar uma pergunta <button>faça seu login</button></span>}
          
            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>

        {JSON.stringify(questions)}
      </main>
    </Container>
  );
}

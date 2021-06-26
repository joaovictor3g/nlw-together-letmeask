import { Toaster } from 'react-hot-toast'
import { Container } from "./styles";


import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { useHistory, useParams } from "react-router";
import { database } from '../../services/firebase';

import logoImg from '../../assets/logo.svg';
import deleteImg from '../../assets/delete.svg';
import checkImg from '../../assets/check.svg';
import answerImg from '../../assets/answer.svg';

import logoWhiteImg from '../../assets/logobranca.svg';
import { useTheme } from 'styled-components';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const history = useHistory();
  
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  const theme = useTheme();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }
  
  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    });
  }

  return (
    <Container>
      <Toaster position="top-left"/>
      <header>
        <div className="content">
          {theme.title==='light' ? (
            <img src={logoImg} alt="logo"/>
          ) : (
            <img src={logoWhiteImg} alt="logo"/>
          )}

          <div>
            <RoomCode 
              code={roomId}
            />
            <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => (
            <Question 
              key={question.id} 
              content={question.content} 
              author={question.author}
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="marcar como respondia"/>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque a pergunta"/>
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="deletar"/>
              </button>
            </Question>
          ))}
        </div>
      </main>
    </Container>
  );
}

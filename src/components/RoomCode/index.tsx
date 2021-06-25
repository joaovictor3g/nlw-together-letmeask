import { Button } from './styles';
import copyImg from '../../assets/copy.svg';
import toast from 'react-hot-toast';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    toast.success('Copiado para clipboard');
  }
  
  return (
    <Button onClick={copyRoomCodeToClipboard}>
      <div>
        <img 
          src={copyImg} 
          alt="copiar codigo de sala"
        />
      </div>
      <span>Sala {props.code}</span>
    </Button>
  )
}
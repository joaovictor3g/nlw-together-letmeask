import styled, { css } from 'styled-components';

interface StyledButtonProps {
  isOutlined?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 5rem;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.colors.asideBackground};

  color: #FFF;
  padding: 0 3.2rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: .8rem;
  }

  ${props => props.isOutlined && css`
    background:${props => props.theme.colors.background};;
    border: 1px solid #8351fd;
    color: ${props => props.theme.title==='light' ? '#8351fd' : '#FFF'};
  `}

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

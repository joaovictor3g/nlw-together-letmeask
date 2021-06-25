import styled from 'styled-components';

export const StyledButton = styled.button`
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

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

import styled from 'styled-components';

export const Button = styled.div`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: ${props => props.theme.colors.background};
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  div {
    height: 100%;
    width: 20%;
    background: ${props => props.theme.colors.asideBackground};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: max-content;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }
`;

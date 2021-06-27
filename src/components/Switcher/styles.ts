import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 10px;

  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 40px;
  justify-content: flex-end;
  button {
    border: 0;
    background: transparent;
    background: ${props => props.theme.colors.asideBackground};
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    cursor: pointer;

    span {
      text-transform: uppercase;
    }
  }

`;

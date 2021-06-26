import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 40px;
  justify-content: flex-end;
  border-bottom: 1px solid #ccc;

  button {
    border: 0;
    background: transparent;
    

    cursor: pointer;

    span {
      text-transform: uppercase;
    }
  }

`;

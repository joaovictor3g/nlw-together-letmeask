import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: ${props => props.theme.colors.asideBackground};
    color: ${props => props.theme.colors.asideColor};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 12rem 8rem;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 3.6rem "Poppins", sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
      color: ${props => props.theme.colors.strongColor};
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;

    }
  }

  main {
    flex: 8;

    padding: 0 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    & > img {
      align-self: center;
    }

    h2 {
      font-size: 2.4rem;
      margin: 6.4rem 0 2.4rem;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 5rem;
        border-radius: 8px;
        padding: 0 1.6rem;
        background: ${props => props.theme.colors.formInputBg};
        border: 1px solid ${props => props.theme.colors.formInputBorder};
      }

      button {
        margin-top: 1.6rem;
      }

      button, input {
        width: 100%;
      }
    }
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.pColor};
    margin-top: 1.6rem;

    a {
      color: ${props => props.theme.colors.aColor};
    }
  }

  .create-room {
    margin-top: 6.4rem;
    height: 5rem;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.colors.createRoomBackground};

    color:${props => props.theme.colors.createRoomColor};
    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: .8rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.separatorColor};

    margin: 3.2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${props => props.theme.colors.separatorBefore};
      margin-right: 1.6rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${props => props.theme.colors.separatorAfter};
      margin-left: 1.6rem;
    }
  }
`;

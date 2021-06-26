import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.questionBoxBg};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04); 
  padding: 24px;

  margin-top: 8px;

  p {
    color: ${props => props.theme.colors.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: ${props => props.theme.colors.text};
        font-size: 1.4rem;
      }
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: ${props => props.theme.colors.asideBackground};

          svg path {
            stroke: ${props => props.theme.colors.asideBackground};
          }
        }
      }
    }
  }
`;

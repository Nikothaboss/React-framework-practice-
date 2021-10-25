import styled from 'styled-components';
import { colors } from '../../app.styled';

export const StyledMain = styled.main`
  background: ${colors.white};
  padding: 60px;
  .headline {
    /* white-space: nowrap; */
    text-align: center;
    font-size: 42px;
    margin-bottom: 2rem;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    .card {
      display: grid;
      justify-items: center;
      background: #def;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        margin-bottom: 1rem;
      }
      h3 {
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 600;
      }
      p {
        margin-bottom: 1rem;
      }
    }
  }
`;

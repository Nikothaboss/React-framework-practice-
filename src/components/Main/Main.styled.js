import styled from 'styled-components';
import { colors, fonts } from '../../app.styled';

export const StyledMain = styled.main`
  /* background: ${colors.gradient}; */
  padding: 60px;
  

  h1{
    font-family: ${fonts.playfair};
    font-style: italic;
    font-weight: 600;
    margin: 0px 0px 100px 0px;
  }



  .text {
    color: #3d3d3d;
  }
  .when-loading {
    height: 50vh;
    display: grid;
    place-items: center;
  }
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
  }
`;

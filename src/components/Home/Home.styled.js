import styled from 'styled-components';

export const StyledHome = styled.main`
  height: 91vh;
  position: relative;
  #tsparticles {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .animation-container {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */

    .hero-text {
      color: white;
      font-size: 1.5rem;
      overflow: hidden;
      /* border-right: 5px solid white; */
      h2 {
        white-space: nowrap;
        text-align: center;
      }
    }

    .sideline {
      background: white;
      /* position: absolute; */
    }
    .hero-text-2 {
      /* background: #def; */
      color: white;
      font-size: 1.5rem;
      overflow: hidden;
      /* border-left: 5px solid white; */
      /* transform: translateX(-4.6%); */
      /* margin-left: 0.5rem; */

      h2 {
        white-space: nowrap;
        text-align: center;
      }
    }
  }
`;

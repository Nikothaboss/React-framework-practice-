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
    height: 80%;
    width: 100%;
    .headlineOne {
      overflow: hidden;
    }
    .barier {
      background: white;
      /* position: absolute; */
    }
    .headlineTwo {
      overflow: hidden;
    }
  }
`;

import styled from 'styled-components';
import { colors } from '../../app.styled';
import { motion } from 'framer-motion';

export const StyledHome = styled(motion.main)`
  height: 91vh;
  position: relative;
  #tsparticles {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .animation-container {
    height: 20rem;
    width: 100%;
    z-index: 99;
    .headlineOne {
      overflow: hidden;
      margin: 0 5px;
    }
    .barier {
      background: ${colors.pink};
      box-shadow: ${colors.pink} 0px 5px 10px;
    }
    .headlineTwo {
      overflow: hidden;
      margin: 0 5px;
    }
  }
  .box-container {
    grid-gap: 1rem;
    max-width: 1100px;
    margin: auto;
    /* media */
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      padding: 20px;
      background: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 15px 0px;
      .stripes-container {
        position: absolute;

        .stripes {
          margin: 12px 0;
        }
      }
      .chevronIcon {
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 40px;
      }
      .box-content {
        overflow: hidden;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 99;
        opacity: 1;
      }
    }
  }
`;

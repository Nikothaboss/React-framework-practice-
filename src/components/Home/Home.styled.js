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
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

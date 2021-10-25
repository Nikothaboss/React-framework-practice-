import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingAnimation = styled.div`
  .loader {
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    background: #b00b69;
  }
`;

const Loader = () => {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut',
        },
      },
    },
  };

  return (
    <LoadingAnimation>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate='animationOne'
      ></motion.div>
    </LoadingAnimation>
  );
};

export default Loader;

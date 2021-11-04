import { auto } from '@popperjs/core';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
// import UseAnimations from 'react-useanimations';
// import { useAnimationSequence } from './useAnimationSequence';
import React from 'react';
import { Flex, Grid } from '@chakra-ui/layout';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTest = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const TestAnimateSharedLayout = () => {
  const controls = useAnimation();
  const sequence = async () => {
    await controls.start({ x: 0, transition: { delay: 1 } });
    await controls.start({
      opacity: 1,
      x: 200,
      transition: { delay: 1, duration: 2 },
    });
    await controls.start({ x: 300, y: 150 });
    await controls.start({
      x: 100,
      y: 150,
      rotate: -360,
      transition: { delay: 1, duration: 1 },
    });
  };
  useEffect(() => {
    sequence();
  }, [controls]);
  return (
    <AnimatePresence>
      <motion.div
        animate={controls}
        style={{ backgroundColor: 'red', width: 100, height: 100 }}
      />
    </AnimatePresence>
  );
};

export default TestAnimateSharedLayout;

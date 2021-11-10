import React, { useEffect, useCallback } from 'react';
import { Box, Flex, Heading, Grid, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { StyledHome } from './Home.styled';
import ParticleComponent from './ParticleComponent';
import { parentBoxVar, childrenBoxVar } from '../../util/animations';

const Home = React.memo(() => {
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const MotionGrid = motion(Grid);

  const barier = useAnimation();
  const headlineOne = useAnimation();
  const headlineTwo = useAnimation();
  const animationContainer = useAnimation();
  const boxControls = useAnimation();

  const sequence = useCallback(async () => {
    await headlineOne.start({ x: 200 });
    await barier.start({
      opacity: 1,
      x: 0,
      y: 0,
      height: 50,
      transition: { delay: 2, duration: 0.5 },
    });
    await headlineOne.start({
      x: 0,
      transition: { duration: 0.3 },
    });
    await barier.start({
      opacity: 1,
      x: 0,
      y: 25,
      height: 100,
      transition: { delay: 0, duration: 0.5 },
    });
    await headlineTwo.start({ x: 0, transition: { duration: 0.5 } });
    await barier.start({ rotate: 90 });
    await barier.start({ height: 300 });
    await animationContainer.start({
      y: -50,
      transition: { stiffness: 300, damping: 8 },
    });
    await boxControls.start('enter');
  }, [barier, headlineOne, headlineTwo, animationContainer, boxControls]);

  useEffect(() => {
    sequence();
  }, [sequence]);

  return (
    <AnimatePresence>
      <StyledHome
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
      >
        <ParticleComponent className='particles' />
        <MotionFlex
          justifyContent='center'
          alignItems='center'
          className='animation-container'
          initial={{ y: 100 }}
          animate={animationContainer}
        >
          <MotionBox className='headlineOne'>
            <MotionHeading initial={{ x: 200 }} animate={headlineOne}>
              Framer
            </MotionHeading>
          </MotionBox>

          <MotionBox
            className='barier'
            initial={{
              height: 50,
              width: 5,
              x: -200,
              opacity: 0,
            }}
            animate={barier}
          />

          <MotionBox initial={{ y: 50 }} className='headlineTwo'>
            <MotionHeading initial={{ x: -200 }} animate={headlineTwo}>
              Motion
            </MotionHeading>
          </MotionBox>
        </MotionFlex>

        {/* boxes */}

        <MotionGrid
          justifyItems='center'
          className='box-container'
          variants={parentBoxVar}
          initial='initial'
          animate={boxControls}
        >
          <MotionBox variants={childrenBoxVar}>
            <Text>hello1</Text>
          </MotionBox>
          <MotionBox variants={childrenBoxVar}>
            <Text>hello2</Text>
          </MotionBox>
          <MotionBox variants={childrenBoxVar}>
            <Text>hello3</Text>
          </MotionBox>
        </MotionGrid>

        {/* end boxes */}
      </StyledHome>
    </AnimatePresence>
  );
});

export default Home;

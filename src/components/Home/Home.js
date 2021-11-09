import React, { useEffect, useCallback } from 'react';
import { Box, Flex, Heading, Grid, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { StyledHome } from './Home.styled';
import Particles from 'react-tsparticles';

const Home = React.memo(() => {
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const MotionGrid = motion(Grid);

  const barier = useAnimation();
  const headlineOne = useAnimation();
  const headlineTwo = useAnimation();
  const animationContainer = useAnimation();

  const boxVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
      beforeChildren: true,
    },
  };
  const boxChildren = {
    initial: {
      opacity: 0,
      x: -200,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

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
      y: -150,
      transition: { stiffness: 300, damping: 8 },
    });
  }, [barier, headlineOne, headlineTwo, animationContainer]);

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
          animate={animationContainer}
        >
          <MotionBox className='headlineOne'>
            <MotionHeading initial={{ x: 200 }} animate={headlineOne}>
              Johann
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
              Nikolai
            </MotionHeading>
          </MotionBox>
        </MotionFlex>
        {/* boxes */}

        <MotionGrid
          justifyItems='center'
          className='box-container'
          variants={boxVariants}
          initial='initial'
          animate='enter'
        >
          <MotionBox variants={boxChildren}>
            <Text>hello1</Text>
          </MotionBox>
          <MotionBox variants={boxChildren}>
            <Text>hello2</Text>
          </MotionBox>
          <MotionBox variants={boxChildren}>
            <Text>hello3</Text>
          </MotionBox>
        </MotionGrid>

        {/* end boxes */}
      </StyledHome>
    </AnimatePresence>
  );
});

// !particles

const ParticleComponent = () => {
  const colorMode = useColorMode();
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  useEffect(() => {
    particlesInit();
    particlesLoaded();
  }, []);
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: `${colorMode.colorMode === 'light' ? '#f2f2f2' : '#1A202C'}`,
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: `${colorMode.colorMode === 'light' ? '#3d3d3d' : '#f2f2f2'}`,
          },
          links: {
            color: `${colorMode.colorMode === 'light' ? '#3d3d3d' : '#f2f2f2'}`,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.7,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Home;

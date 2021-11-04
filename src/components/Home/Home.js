import React from 'react';
import { Box, Text, Grid, Flex, Heading } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { colors } from '../../app.styled';
import { StyledHome } from './Home.styled';
import Particles from 'react-tsparticles';

const Home = () => {
  const headlineVariant = {
    initial: {
      opacity: 0,
      width: 0,
      x: 0,
      y: 0,
    },

    animate: {
      opacity: 1,
      width: 100,
      x: 0,
      y: 0,
      transition: {
        type: 'linear',
        delay: 1,
        duration: 1,
      },
    },

    initialSideline: {
      height: 50,
      width: 5,
      y: 0,
    },
    animateSideline: {
      height: 120,
      width: 5,
      y: 35,
      // position: 'absolute',
      transition: {
        type: 'linear',
        delay: 2,
        duration: 1,
      },
    },

    initial2: {
      width: 120,
      y: 50,
    },
    // animate2: {
    //   opacity: 1,
    //   y: 50,
    //   transition: {
    //     // when: 'beforeChildren',
    //     type: 'linear',
    //     delay: 2,
    //     duration: 1,
    //   },
    // },

    initialh2: {
      opacity: 1,
      x: -200,
    },
    animateh2: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'linear',
        delay: 3,
        duration: 1,
      },
    },
  };
  const MotionHeading = motion(Heading)
  const headingColor = useColorModeValue("#000", "#fff")
  return (
    <StyledHome>
      <ParticleComponent className='particles' />

      <motion.section
        initial={{ y: 0, x: -120 }}
        animate={{ y: -30, x: -120 }}
        transition={{ type: 'linear', duration: 1, delay: 2 }}
        className='animation-container'
      >
        <motion.div
          variants={headlineVariant}
          initial='initial'
          animate='animate'
          className='hero-text'
        >
          <MotionHeading color={headingColor}>Johann</MotionHeading>
        </motion.div>

        <motion.div
          variants={headlineVariant}
          initial='initialSideline'
          animate='animateSideline'
          className='sideline'
        ></motion.div>

        <motion.div
          variants={headlineVariant}
          initial='initial2'
          // animate='animate2'
          className='hero-text-2'
        >
          <MotionHeading
            variants={headlineVariant}
            initial='initialh2'
            animate='animateh2'
            color={headingColor}
          >
            Nikolai
          </MotionHeading>
        </motion.div>
      </motion.section>
    </StyledHome>
  );
};

const ParticleComponent = () => {
  const colorMode = useColorMode()
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: `${colorMode.colorMode === "light" ? "#f2f2f2" : "#3d3d3d"}`,
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
            value: `${colorMode.colorMode === "light" ? "#3d3d3d" : "#f2f2f2"}`,
          },
          links: {
            color: `${colorMode.colorMode === "light" ? "#3d3d3d" : "#f2f2f2"}`,
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
            speed: 1,
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

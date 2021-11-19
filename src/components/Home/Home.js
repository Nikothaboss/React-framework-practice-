import React, { useEffect, useCallback, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Grid,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from 'framer-motion';
import { StyledHome } from './Home.styled';
import ParticleComponent from './ParticleComponent';
import {
  parentBoxVar,
  childrenBoxVar,
  stripesVariations,
} from '../../util/animations';
import { Link } from 'react-router-dom';
import { Links } from '../../util/links';

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
        <Boxes
          boxControls={boxControls}
          MotionBox={MotionBox}
          MotionGrid={MotionGrid}
          MotionFlex={MotionFlex}
        />
        {/* end boxes */}
      </StyledHome>
    </AnimatePresence>
  );
});

const Boxes = ({ boxControls, MotionBox, MotionGrid, MotionFlex }) => {
  // test

  // test
  return (
    <MotionGrid
      justifyItems='center'
      className='box-container'
      variants={parentBoxVar}
      initial='initial'
      animate={boxControls}
    >
      {Links.map((item, index) => {
        return <Firkant key={index} item={item} />;
      })}
    </MotionGrid>
  );
};

const Firkant = ({ item }) => {
  const { id, title } = item;
  const MotionBox = motion(Box);
  const MotionChevronIcon = motion(ChevronDownIcon);
  const [isOpen, setIsOpen] = useState(false);
  const stripeControls = useAnimation();

  const animateStripesSequence = () => {
    stripeControls.start((i) => ({
      x: 150,
      y: -70,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };
  const exitStripesSequence = () => {
    stripeControls.start((i) => ({
      x: 130,
      y: -50,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  return (
    <AnimateSharedLayout>
      <MotionBox
        key={id}
        layout
        className='box'
        onMouseEnter={animateStripesSequence}
        onMouseLeave={exitStripesSequence}
        whileHover={{ scale: 1.03 }}
        variants={childrenBoxVar}
        onClick={() => setIsOpen(!isOpen)}
        initial='initial'
        animate={isOpen ? 'open' : 'close'}
      >
        <Text>{title}</Text>
        <Stripes
          stripeControls={stripeControls}
          MotionBox={MotionBox}
          isOpen={isOpen}
        />
        <AnimatePresence>{isOpen && <SlideFirkant layout />}</AnimatePresence>
        <MotionChevronIcon
          animate={
            isOpen
              ? { rotate: [0, 180], transition: { duration: 0.4 } }
              : { rotate: [180, 0], transition: { duration: 0.4 } }
          }
          className='chevronIcon'
        />
      </MotionBox>
    </AnimateSharedLayout>
  );
};

const SlideFirkant = () => {
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      layout
      initial={{ height: 0, opacity: 1 }}
      animate={{
        height: '100%',
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      exit={{
        height: 0,
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      className='box-content'
    >
      <Text layout>
        This page has been animated with the animation library Framer Motion.
        click the button below to read more
      </Text>
      <Button layout>
        <Link layout to='/FramerMotion'>
          Read More
        </Link>
      </Button>
    </MotionFlex>
  );
};

const Stripes = ({ stripeControls, MotionBox, isOpen }) => {
  return (
    <Box className='stripes-container'>
      <MotionBox
        variants={stripesVariations}
        custom={2}
        initial='initial'
        animate={!isOpen ? stripeControls : 'animate'}
        className='stripes'
      />
      <MotionBox
        variants={stripesVariations}
        custom={1}
        initial='initial'
        animate={!isOpen ? stripeControls : 'animate'}
        className='stripes'
      />
      <MotionBox
        variants={stripesVariations}
        custom={0}
        initial='initial'
        animate={!isOpen ? stripeControls : 'animate'}
        className='stripes'
      />
    </Box>
  );
};

export default Home;

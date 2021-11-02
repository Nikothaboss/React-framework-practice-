import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import { StyledHeader } from './Header.styled';
import { Box, Text, Grid, Flex } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { colors } from '../../app.styled';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleSize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [screenWidth]);
  // return screenWidth > 768 ? <TabletPluss /> : <MobileWidth />;
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(`${colors.darkBlue}`, `${colors.gradient}`);
  const color = useColorModeValue(`${colors.white}`, `${colors.darkBlue}`);
  // console.log(colorMode)
  return (
    <Box bg={bg} color={color}>
      <StyledHeader>
        <Grid templateColumns='repeat(3, 1fr)' alignContent='center'>
          <Flex>
            <Text className='logo'>Logo</Text>
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            className='icon-container'
          >
            {colorMode === 'light' ? (
              <MoonIcon className='moon-icon' onClick={toggleColorMode} />
            ) : (
              <SunIcon className='sun-icon' onClick={toggleColorMode} />
            )}
          </Flex>
          <Flex
            justifyContent='end'
            alignItems='center'
            className='menu-container'
          >
            {screenWidth > 768 ? (
              <TabletPluss />
            ) : (
              <MobileWidth bg={bg} color={color} handleSize={handleSize} />
            )}
          </Flex>
        </Grid>
      </StyledHeader>
    </Box>
  );
};

const MobileWidth = () => {
  const [showMenu, setShowMenu] = useState(false);
  const MotionBox = motion(Box);
  const bg = useColorModeValue(`${colors.white}`, `${colors.darkGray}`);
  const color = useColorModeValue(`${colors.black}`, `${colors.white}`);
  const toggleMenu = () => setShowMenu(!showMenu);

  const mobileVariants = {
    hidden: {
      left: -500,
      transition: {
        type: 'linear',
        duration: 0.4,
        delay: 0.4,
      },
    },
    visible: {
      left: 0,
      transition: {
        type: 'linear',
        duration: 0.4,
        delay: 0,
      },
    },
  };

  return (
    <>
      <HamburgerIcon className='menu-item hamburger' onClick={toggleMenu} />
      <AnimatePresence>
        {showMenu && (
          <>
            <MotionBox
              bg={bg}
              color={color}
              onClick={toggleMenu}
              className='backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            ></MotionBox>
            <MotionBox
              bg={bg}
              color={color}
              className='mobile-menu'
              variants={mobileVariants}
              initial={{ left: -500 }}
              animate='visible'
              exit='hidden'
            >
              <MobileMenu toggleMenu={toggleMenu} />
            </MotionBox>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileMenu = ({ toggleMenu }) => {
  const MotionText = motion(Text);

  const linkVariants = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    hover: {
      scale: 1.05,
      x: 15,
      color: colors.pink,
      transition: {
        type: 'spring',
        stiffness: 300,
        mass: 0.1,
        damping: 15,
      },
    },
  };

  return (
    <>
      <Link to='/' onClick={toggleMenu}>
        <MotionText
          variants={linkVariants}
          initial={{ x: -500 }}
          animate='visible'
          exit='hidden'
          whileHover='hover'
          transition={{ type: 'linear', delay: 0 }}
          className='mobile-menu-item'
        >
          Home
        </MotionText>
      </Link>
      <Link to='/FramerMotion' onClick={toggleMenu}>
        <MotionText
          variants={linkVariants}
          initial={{ x: -500 }}
          animate='visible'
          exit='hidden'
          whileHover='hover'
          transition={{ type: 'linear', delay: 0.1 }}
          className='mobile-menu-item'
        >
          Framer Motion
        </MotionText>
      </Link>
      <Link to='/ChakraUI' onClick={toggleMenu}>
        <MotionText
          variants={linkVariants}
          initial={{ x: -500 }}
          animate='visible'
          exit='hidden'
          whileHover='hover'
          transition={{ type: 'linear', delay: 0.2 }}
          className='mobile-menu-item'
        >
          Chakra UI
        </MotionText>
      </Link>
      <Link to='/API' onClick={toggleMenu}>
        <MotionText
          variants={linkVariants}
          initial={{ x: -500 }}
          animate='visible'
          exit='hidden'
          whileHover='hover'
          transition={{ type: 'linear', delay: 0.3 }}
          className='mobile-menu-item'
        >
          API
        </MotionText>
      </Link>
    </>
  );
};

const TabletPluss = () => {
  return (
    <>
      <Link to='/'>
        <Text className='menu-item'>Home</Text>
      </Link>
      <Link to='/FramerMotion'>
        <Text className='menu-item'>Framer Motion</Text>
      </Link>
      <Link to='/ChakraUI'>
        <Text className='menu-item'>Chakra UI</Text>
      </Link>
      <Link to='/API'>
        <Text className='menu-item'>API</Text>
      </Link>
    </>
  );
};

export default Header;

// pt='5' pb='5' pl='10' pr='10'
// transition={{ type: 'linear', delay: 0.3, duration: 0.1 }}

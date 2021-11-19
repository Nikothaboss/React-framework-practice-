import React, { useEffect, useState, useCallback } from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { StyledHeader } from './Header.styled';
import { Box, Text, Grid, Flex } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { colors } from '../../app.styled';
import { MenuLinks } from '../../util/links';
import {
  linkVariants,
  colorModeVariants,
  mobileVariants,
} from '../../util/animations';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleSize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [screenWidth]);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(`${colors.darkBlue}`, `${colors.gradient}`);
  const color = useColorModeValue(`${colors.white}`, `${colors.darkBlue}`);
  const opositeColor = useColorModeValue(
    `${colors.darkBlue}`,
    `${colors.white}`
  );

  const [sunrise, setSunrise] = useState(false);

  return (
    <Box
      bg={location.pathname === '/' ? 'transparent' : bg}
      color={location.pathname === '/' ? opositeColor : color}
    >
      <StyledHeader>
        <Grid templateColumns='repeat(3, 1fr)' alignContent='center'>
          <Link exact='true' to='/' className='logo'>
            Logo
          </Link>

          <Flex
            justifyContent='center'
            alignItems='center'
            className='icon-container'
          >
            <motion.div
              onClick={() => setSunrise(!sunrise)}
              variants={colorModeVariants}
              animate={sunrise ? 'enter' : 'leave'}
            >
              {colorMode === 'light' ? (
                <MoonIcon className='moon-icon' onClick={toggleColorMode} />
              ) : (
                <SunIcon className='sun-icon' onClick={toggleColorMode} />
              )}
            </motion.div>
          </Flex>
          <Flex
            justifyContent='end'
            alignItems='center'
            className='menu-container'
          >
            {screenWidth > 900 ? (
              <TabletPluss />
            ) : (
              <MobileWidth bg={bg} color={color} />
            )}
          </Flex>
        </Grid>
      </StyledHeader>
    </Box>
  );
};

const MobileWidth = React.memo(() => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const MotionBox = motion(Box);
  const bg = useColorModeValue(`${colors.white}`, `${colors.darkBlue}`);
  const color = useColorModeValue(`${colors.black}`, `${colors.white}`);
  const opositeColor = useColorModeValue(
    `${colors.darkBlue}`,
    `${colors.white}`
  );
  const location = useLocation();

  const burgerUpperLine = useAnimation();
  const burgerMiddleLine = useAnimation();
  const burgerLowerLine = useAnimation();

  const burgerSequence = useCallback(() => {
    burgerUpperLine.start(
      showMenu
        ? { rotate: [0, 45], y: [0, 6], transition: { duration: 0.4 } }
        : { rotate: [45, 0], y: [6, 0], transition: { duration: 0.4 } }
    );
    burgerMiddleLine.start(
      showMenu
        ? { opacity: [1, 0], transition: { duration: 0.4 } }
        : { opacity: [0, 1], transition: { duration: 0.4 } }
    );
    burgerLowerLine.start(
      showMenu
        ? { rotate: [0, -45], y: [0, -6], transition: { duration: 0.4 } }
        : { rotate: [-45, 0], y: [-6, 0], transition: { duration: 0.4 } }
    );
  }, [burgerUpperLine, burgerMiddleLine, burgerLowerLine, showMenu]);

  useEffect(() => {
    burgerSequence();
  }, [burgerSequence]);

  return (
    <>
      <MotionBox layout className='hamburger' onClick={toggleMenu}>
        <MotionBox
          layout
          // bg={opositeColor}
          bg={location.pathname === '/' ? opositeColor : bg}
          animate={burgerUpperLine}
          className='line'
        ></MotionBox>

        <MotionBox
          bg={location.pathname === '/' ? opositeColor : bg}
          animate={burgerMiddleLine}
          className='line'
        ></MotionBox>
        <MotionBox
          bg={location.pathname === '/' ? opositeColor : bg}
          animate={burgerLowerLine}
          className='line'
        ></MotionBox>
      </MotionBox>
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
});

const MobileMenu = ({ toggleMenu }) => {
  const MotionText = motion(Text);

  return (
    <>
      {MenuLinks.map((item) => {
        const { id, pathName, title } = item;
        return (
          <NavLink exact to={`/${pathName}`} onClick={toggleMenu}>
            <MotionText
              variants={linkVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              custom={id}
              whileHover='hover'
              className='mobile-menu-item'
            >
              {title}
            </MotionText>
          </NavLink>
        );
      })}
    </>
  );
};

const TabletPluss = () => {
  return (
    <>
      {MenuLinks.map((item) => {
        const { pathName, title, id } = item;
        return (
          <NavLink key={id} exact to={`/${pathName}`}>
            <Text className='menu-item'>{title}</Text>
          </NavLink>
        );
      })}
    </>
  );
};

export default Header;

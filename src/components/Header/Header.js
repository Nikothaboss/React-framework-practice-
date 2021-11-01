import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import { StyledHeader } from './Header.styled';
import { Box, Text, Grid, Flex } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

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
  const bg = useColorModeValue('#070707', '#f2f2f2');
  const color = useColorModeValue('#fff', '#000');
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
            {screenWidth > 768 ? <TabletPluss /> : <MobileWidth />}
          </Flex>
        </Grid>
      </StyledHeader>
    </Box>
  );
};

const MobileWidth = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <AnimateSharedLayout>
        <motion.div
          layout
          initial={{ x: 0 }}
          animate={{ x: -20 }}
          exit={{ x: 100 }}
          transition={{ type: 'ease', duration: 0.25 }}
        >
          <HamburgerIcon
            layout
            className='menu-item'
            onClick={() => setShowMenu(!showMenu)}
          />
        </motion.div>
        <AnimatePresence>
          {showMenu && (
            <>
              <motion.div
                layout
                className='myAnimation'
                initial={{ x: 0, position: 'absolute' }}
                animate={{ x: -20, position: 'absolute' }}
                exit={{ x: 100 }}
                transition={{ type: 'ease', duration: 0.25 }}
              >
                <TabletPluss />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
  // const [showMenu, setShowMenu] = useState(false);
  // if (!showMenu) {
  //   return (
  //     <motion.div animate={{ x: -100 }}>
  //       <HamburgerIcon
  //         className='menu-item'
  //         onClick={() => setShowMenu(!showMenu)}
  //       />
  //     </motion.div>
  //   );
  // }
  // return (
  //   <>
  //     <AnimateSharedLayout>
  //       <motion.div initial={{ x: 0 }} animate={{ x: -20 }} exit={{ x: 0 }}>
  //         <HamburgerIcon
  //           className='menu-item'
  //           onClick={() => setShowMenu(!showMenu)}
  //         />
  //       </motion.div>

  //       <motion.div
  //         className='myAnimation'
  //         initial={{ x: 0, opacity: 0 }}
  //         animate={{ x: -20, opacity: 1 }}
  //         exit={{ x: 0, opacity: 0 }}
  //       >
  //         <h2>hello</h2>
  //       </motion.div>
  //     </AnimateSharedLayout>
  //   </>
  // );
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

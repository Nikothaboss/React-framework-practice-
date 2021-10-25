import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import { StyledHeader } from './Header.styled';
import { Box, HStack, Text, Grid, Flex } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';

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
  });
  // return screenWidth > 768 ? <TabletPluss /> : <MobileWidth />;
  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue( "#000", "#fff")
  const color = useColorModeValue( "#fff", "#000" )
  console.log(colorMode)
  return (
    <Box bg={bg} color={color}>
      <StyledHeader >
        <Grid templateColumns='repeat(3, 1fr)' alignContent='center' >
          <Flex>
            <Text className='logo'>Logo</Text>
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            className='icon-container'
          >
            {colorMode == "light" ? <MoonIcon className='moon-icon' onClick={toggleColorMode} /> : <SunIcon className='sun-icon' onClick={toggleColorMode}/>}
          </Flex>
          <Flex
            justifyContent='end'
            alignItems='center'
            className='menu-container'
          >
            <Text className='menu-item'>Home</Text>
            <Text className='menu-item'>Home</Text>
            <Text className='menu-item'>Home</Text>
          </Flex>
        </Grid>
      </StyledHeader>
    </Box>
  );
};

const MobileWidth = () => {

  

  return (
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
          <SunIcon className='sun-icon'  />
          <MoonIcon className='moon-icon' />
        </Flex>
        <Flex
          justifyContent='end'
          alignItems='center'
          className='menu-container'
        >
          <HamburgerIcon className='menu-item' />
        </Flex>
      </Grid>
    </StyledHeader>
  );
};

const TabletPluss = () => {

  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue( "#000", "#fff")
  const color = useColorModeValue( "#fff", "#000" )
  console.log(colorMode)
  return (
    <Box bg={bg} color={color}>
      <StyledHeader >
        <Grid templateColumns='repeat(3, 1fr)' alignContent='center' >
          <Flex>
            <Text className='logo'>Logo</Text>
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            className='icon-container'
          >
            {colorMode == "light" ? <MoonIcon className='moon-icon' onClick={toggleColorMode} /> : <SunIcon className='sun-icon' onClick={toggleColorMode}/>}
          </Flex>
          <Flex
            justifyContent='end'
            alignItems='center'
            className='menu-container'
          >
            <Text className='menu-item'>Home</Text>
            <Text className='menu-item'>Home</Text>
            <Text className='menu-item'>Home</Text>
          </Flex>
        </Grid>
      </StyledHeader>
    </Box>
  );
};

export default Header;

// pt='5' pb='5' pl='10' pr='10'

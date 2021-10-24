import React from 'react';
import {
  Flex,
  Box,
  Spacer,
  Heading,
  HStack,
  Text,
  Grid,
} from '@chakra-ui/layout';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';

const Header = () => {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      bg='#b00b69'
      pt='5'
      pb='5'
      pl='10'
      pr='10'
    >
      <Box>
        <Text fontSize='24px'>Logo</Text>
      </Box>
      <HStack justifyContent='center' fontSize='24px' spacing='24px'>
        <SunIcon cursor='pointer' />
        <MoonIcon cursor='pointer' />
      </HStack>
      <HStack justifyContent='end' spacing='24px'>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Projects</Text>
      </HStack>
    </Grid>
  );
};

export default Header;

// pt='5' pb='5' pl='10' pr='10'

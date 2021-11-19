import React from 'react';
import { StyledFooter } from './Footer.styled';
import { HStack, VStack, Text, Box } from '@chakra-ui/layout';
import { AiFillGithub } from 'react-icons/ai';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { colors } from '../../app.styled';
import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();
  const color = useColorModeValue(`${colors.white}`, `${colors.black}`);
  const frontPageColor = useColorModeValue(
    `${colors.black}`,
    `${colors.white}`
  );
  const bg = useColorModeValue(`${colors.darkGray}`, `${colors.lightGray}`);

  return (
    <Box bg={location.pathname === '/' ? 'transparent' : bg}>
      <StyledFooter>
        <VStack>
          <HStack spacing='105px'>
            <a className='github' href='https://github.com/johannranudd'>
              <AiFillGithub
                fontSize='50'
                color={location.pathname === '/' ? frontPageColor : color}
              />
              <Text color={location.pathname === '/' ? frontPageColor : color}>
                Johann
              </Text>
            </a>

            <a className='github' href='https://github.com/Nikothaboss'>
              <AiFillGithub
                fontSize='50'
                color={location.pathname === '/' ? frontPageColor : color}
              />
              <Text color={location.pathname === '/' ? frontPageColor : color}>
                Nikolai
              </Text>
            </a>
          </HStack>
        </VStack>
      </StyledFooter>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { StyledFooter } from './Footer.styled';
import { HStack, Grid, VStack, Text, Box } from '@chakra-ui/layout';
import { AiFillGithub } from "react-icons/ai"
import { useColorModeValue } from '@chakra-ui/color-mode';
import { colors } from '../../app.styled';
import { useLocation } from 'react-router';


const Footer = () => {
  const location = useLocation()
  const color = useColorModeValue("#f2f2f2", "#3d3d3d")
  const bg = useColorModeValue(`${colors.darkGray}`, `${colors.lightGray}`)

  return (
    <Box bg={location.pathname === "/" ? "transparent" : bg}>
      <StyledFooter>
      
          <VStack>
            <HStack spacing="105px">
              <Grid className="github">
                <AiFillGithub fontSize="50" color={color} />
                <Text color={color}>Johann</Text>
              </Grid>
      
              <Grid className="github">
                <AiFillGithub fontSize="50" color={color} />
                <Text color={color}>Nikolai</Text>
              </Grid>
            </HStack>
          </VStack>
      </StyledFooter>
    </Box>
  );
};

export default Footer;

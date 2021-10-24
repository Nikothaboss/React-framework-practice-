import React from 'react';
import { StyledFooter } from './Footer.styled';
import { HStack, Grid, VStack } from '@chakra-ui/layout';
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <StyledFooter>
      
        <VStack>

          <HStack spacing="105px">

            <Grid className="github">
              <AiFillGithub fontSize="50"/>
              <p>Johann</p>
            </Grid>
          
            <Grid className="github">
              <AiFillGithub fontSize="50"/>
              <p>Nikolai</p>
            </Grid>

          </HStack>

        </VStack>

    </StyledFooter>
  );
};

export default Footer;

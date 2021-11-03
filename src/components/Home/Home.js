import React from 'react';
import { Box, Text, Grid, Flex } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { colors } from '../../app.styled';
import { StyledHome } from './Home.styled';

const Home = () => {
  return <StyledHome>Home page</StyledHome>;
};

export default Home;

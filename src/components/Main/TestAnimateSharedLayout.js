import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// const StyledSmallItem = styled.div`
//   background: white;
//   color: black;
// `;

// const StyledLargeItem = styled.div`
//   background: black;
//   color: white;
// `;

const TestAnimateSharedLayout = () => {
  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <Item />
      </motion.div>
    </AnimateSharedLayout>
  );
};

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>hello</motion.h2>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.div>
  );
};

const Content = () => {
  return (
    <>
      <motion.div
        layout
        // initial={{ height: 0, x: 0 }}
        transition={{ duration: 1 }}
        animate={{ height: 100, x: 100 }}
        //   exit={{ height: 0, x: 50 }}
      >
        <h2>Large Item</h2>
        <h2>Large Item</h2>
        <h2>Large Item</h2>
      </motion.div>
    </>
  );
};

export default TestAnimateSharedLayout;

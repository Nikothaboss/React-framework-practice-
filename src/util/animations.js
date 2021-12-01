import { colors } from '../app.styled';
// !header

export const colorModeVariants = {
  enter: {
    y: [0, 100, 0],
    transition: {
      type: 'linear',
      duration: 0.6,
    },
  },
  leave: {
    y: [0, 99, 0],
    transition: {
      type: 'linear',
      duration: 0.6,
    },
  },
};

export const mobileVariants = {
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

export const linkVariants = {
  hidden: (i) => ({
    x: -500,
    opacity: 0,
    transition: { delay: i * 0.1, type: 'linear' },
  }),
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.1, type: 'linear' },
  }),
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

// !Home page
export const parentBoxVar = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const childrenBoxVar = {
  initial: {
    opacity: 1,
    height: 100,
    // width: 250,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    height: [100, 400],
    transition: { duration: 0.4 },
  },
  close: {
    height: [400, 100],
    transition: { duration: 0.4 },
  },
};

export const stripesVariations = {
  initial: {
    background: '#b00b69',
    height: 10,
    width: 100,
    x: 110,
    y: -50,
    rotate: -45,
  },
  animate: (i) => ({
    x: [130, 110],
    y: [-70, -50],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

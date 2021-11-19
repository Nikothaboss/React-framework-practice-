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
    opacity: 0,
    height: 100,
    width: 300,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    height: [100, 400],
    opacity: [1, 1],
    scale: 1.03,
    transition: { duration: 0.4 },
  },
  close: {
    height: [400, 100],
    opacity: [1, 1],
    transition: { duration: 0.4 },
  },
};

export const stripesVariations = {
  initial: {
    background: '#b00b69',
    height: 10,
    width: 100,
    x: 130,
    y: -50,
    rotate: -45,
    // transition: { duration: 1 },
  },
  animate: (i) => ({
    x: [150, 130],
    y: [-70, -50],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

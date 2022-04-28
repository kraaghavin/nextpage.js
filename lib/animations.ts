const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 1,
      delay: 3,
      duration: 2,
      ease: [0.075, 0.82, 0.165, 1],

    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 1,
      delay: 3

    }
  },
  transition: {
    duration: 2.5
  }
};

export const animations = [
  slideRight
];

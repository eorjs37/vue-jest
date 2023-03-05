const timeOutFunc = value => {
  setTimeout(() => {
    return 1000;
  }, 5000);
};

const calc = (a, b) => {
  return a + b;
};

export { timeOutFunc, calc };

const greet2 = () => {
  console.log('hi');
  console.trace();
};

const greet = () => {
  greet2();
};


greet();

const factorial = (factorialNum, acc = 0) => {
  // Базовый случай
  if (factorialNum === 0) {
    console.trace();
    return acc;
  }

  // рекурсивный случай
  return factorial(factorialNum - 1, acc + factorialNum);
};

console.log(factorial(4));

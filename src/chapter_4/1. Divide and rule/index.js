const countEqualSquares = (fieldWidth = 1, fieldHeight = 1) => {
  const func = (width, height) => {
    if (height <= 0) return false;
    if (width <= 0) return false;

    // базовый случай
    if (width % height === 0) return height;
    if (height % width === 0) return width;

    // Сводим задачу к базовому случаю
    if (width < height) {
      const newHeight = height - width;
      return func(width, newHeight);
    }
    const newWidth = width - height;
    return func(newWidth, height);
  };
  return func(fieldWidth, fieldHeight);
};

console.log(countEqualSquares(1680, 640));


const sum = (firstNum, ...otherNums) => {
  const result = firstNum + (otherNums.length === 0 ? 0 : sum(...otherNums));
  return result;
};

console.log(sum(1, 2, 3));

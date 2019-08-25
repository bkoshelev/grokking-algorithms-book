import _ from 'lodash';

const getBinarySearchStepCount = (numberToFind = 0, listBegin = 0, listEnd = 10) => {
  if (numberToFind < listBegin
    || numberToFind > listEnd) {
    throw new Error('getBinarySearchStepCount: number out of range');
  }

  const func = (steps = 0, list = []) => {
    // последний шаг
    if (list.length === 1 || list.length === 2) {
      return steps;
    }

    const middleOfList = list[Math.floor(list.length / 2)];

    if (middleOfList > numberToFind) {
      const newListBegin = list[0];
      const newListEnd = list[Math.floor(list.length / 2)] + 1;
      return func(steps + 1, _.range(newListBegin, newListEnd));
    }

    const newListBegin = list[Math.floor(list.length / 2)];
    const newListEnd = list[list.length - 1];
    return func(steps + 1, _.range(newListBegin, newListEnd));
  };
  return func(0, _.range(listBegin, listEnd + 1));
};

console.log(getBinarySearchStepCount(50, 1, 1000000));

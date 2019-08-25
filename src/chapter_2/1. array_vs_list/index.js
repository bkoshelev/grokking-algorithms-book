const array = [0, 1, 2];

// VS

const createPair = (first, second) => ({
  first, second,
});

const createList = (...values) => {
  const func = (val, ...tail) => {
    if (tail.length === 0) return createPair(val, null);
    return createPair(val, func(...tail));
  };

  return func(...values);
};

const linkedList = createList(1, 2, 3, 4);
console.log(JSON.stringify(linkedList));

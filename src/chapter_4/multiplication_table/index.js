const createMultiplicationTable = (listOfNum) => {
  const addMultipleValue = num1 => num2 => num2 * num1;
  const addRow = (num1) => {
    const addValue = addMultipleValue(num1);
    return listOfNum.map(addValue);
  };
  const table = [listOfNum, ...listOfNum.map(addRow)];
  return table;
};


console.log(JSON.stringify(createMultiplicationTable([1, 2])));

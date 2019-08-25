
const findMin = (acc, el, minValueIndex) => (el < acc.minValue ? { minValue: el, minValueIndex } : acc);

const selectionSort = (list) => {
  const sortList = [...list];
  const newList = [];
  for (let i = 0; i < list.length; i += 1) {
    const {
      minValue: newSortElement,
      minValueIndex: newSortElementIndex,
    } = sortList.reduce(findMin, { minValue: sortList[0], minValueIndex: 0 });

    newList.push(newSortElement);
    sortList.splice(newSortElementIndex, 1);
  }
  return newList;
};

console.log(selectionSort([3, 2, 1, 5, 8]));

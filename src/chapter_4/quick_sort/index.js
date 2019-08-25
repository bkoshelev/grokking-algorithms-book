const getMinThan = (num, list) => list.filter(el => el < num);
const getMaxThan = (num, list) => list.filter(el => el > num);

const qsort = (listOfNum) => {
  if (listOfNum.length === 0) return listOfNum;
  if (listOfNum.length === 1) return listOfNum;
  if (listOfNum.length === 2) {
    return listOfNum[0] < listOfNum[1] ? listOfNum : [listOfNum[1], listOfNum[0]];
  }
  return [
    ...qsort(getMinThan(listOfNum[0], listOfNum)),
    listOfNum[0],
    ...qsort(getMaxThan(listOfNum[0], listOfNum)),
  ];
};

console.log(qsort([5, 4, 3, 2, 1]));

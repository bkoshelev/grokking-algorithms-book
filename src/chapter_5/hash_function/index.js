const createHashTable = () => ({
  iter: 0,
  valueArray: [],
  hashList: {},
  getPropPos(name) {
    if (Object.keys(this.hashList).includes(name)) return this.hashList[name];

    this.hashList[name] = this.iter;
    this.iter += 1;
    return this.hashList[name];
  },
  addValue(pos, value) {
    this.valueArray[pos] = value;
  },
  getValue(pos) {
    return this.valueArray[pos];
  },
});

const hashTable = createHashTable();

hashTable.addValue(hashTable.getPropPos('apple'), 1);

console.log(hashTable.getValue(hashTable.getPropPos('apple')));

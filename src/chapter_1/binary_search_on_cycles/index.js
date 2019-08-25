import _ from 'lodash';

const http = require('http');

'use strict';

function getBinarySearchStepCount(numberToFind, listBegin, listEnd) {
  if (numberToFind < listBegin
    || numberToFind > listEnd) {
    throw new Error('getBinarySearchStepCount: number out of range');
  }

  let steps = 0;
  let list = _.range(listBegin, listEnd + 1);

  while (list.length > 2) {
    const middleOfList = list[Math.floor(list.length / 2)];

    steps += 1;

    if (middleOfList > numberToFind) {
      const newListBegin = list[0];
      const newListEnd = list[Math.floor(list.length / 2)] + 1;

      list = _.range(newListBegin, newListEnd);
    }

    const newListBegin = list[Math.floor(list.length / 2)];
    const newListEnd = list[list.length - 1];
    list = _.range(newListBegin, newListEnd);
  }
  return steps;
}

// getBinarySearchStepCount(50, 1, 1000000000);

const port = 9229;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

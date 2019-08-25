import { createCostList, createGraph, createQueue } from '.';

test('test A', () => {
  const graph = createGraph();

  graph.addNode({ id: 0, name: 'city1', neighbours: [1, 2] });
  graph.addNode({ id: 1, name: 'city2', neighbours: [3, 4] });
  graph.addNode({ id: 2, name: 'city3', neighbours: [1, 4] });
  graph.addNode({ id: 3, name: 'city4', neighbours: [4, 5] });
  graph.addNode({ id: 4, name: 'city5', neighbours: [5] });
  graph.addNode({ id: 5, name: 'city6', neighbours: [] });

  graph.costs.addCost(0, 1, 5);
  graph.costs.addCost(0, 2, 2);

  graph.costs.addCost(1, 3, 4);
  graph.costs.addCost(1, 4, 2);

  graph.costs.addCost(2, 1, 8);
  graph.costs.addCost(2, 4, 7);

  graph.costs.addCost(3, 4, 6);
  graph.costs.addCost(3, 5, 3);

  graph.costs.addCost(4, 5, 1);


  const result = graph.findPath(0, 5);
  console.log(result);
  expect(result.cost).toBe(8);
});

test('test B', () => {
  const graph = createGraph();

  graph.addNode({ id: 0, name: 'city1', neighbours: [1] });
  graph.addNode({ id: 1, name: 'city2', neighbours: [3] });
  graph.addNode({ id: 2, name: 'city3', neighbours: [1] });
  graph.addNode({ id: 3, name: 'city4', neighbours: [4, 2] });
  graph.addNode({ id: 4, name: 'city5', neighbours: [] });

  graph.costs.addCost(0, 1, 10);

  graph.costs.addCost(1, 3, 20);

  graph.costs.addCost(2, 1, 1);

  graph.costs.addCost(3, 2, 1);
  graph.costs.addCost(3, 4, 30);


  const result = graph.findPath(0, 4);
  console.log(result);
  expect(result.cost).toBe(60);
});

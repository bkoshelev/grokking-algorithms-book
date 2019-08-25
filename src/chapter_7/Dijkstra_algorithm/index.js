/* eslint-disable no-loop-func */
import _ from 'lodash';

// очередь
const createQueue = () => ({
  queue: [],
  addValues(...values) {
    this.queue.push(...values);
    return this;
  },
  getValue() {
    return this.queue.shift();
  },
  getQueueLength() {
    return this.queue.length;
  },
});

const createCostList = () => ({
  costs: {},
  addCost(fromId, toId, cost) {
    if (this.costs[fromId]) {
      this.costs[fromId][toId] = cost;
    } else {
      this.costs[fromId] = { [toId]: cost };
    }
  },
  getCost(fromId, toId) {
    return _.get(this.costs, [fromId, toId]);
  },
});

const getPath = (graph, nodeId, path) => {
  const parentId = graph[nodeId].parent;
  if (parentId === null) {
    return path.reverse();
  }
  return getPath(graph, parentId, [...path, parentId]);
};

// граф
const createGraph = () => ({
  graph: {},
  costs: createCostList(),
  addNode({ id = 0, name = '', neighbours = [] }) {
    this.graph[id] = {
      id, name, neighbours,
    };
  },
  updateNode(nodeId, params) {
    this.graph[nodeId] = { ...this.graph[nodeId], ...params };
  },
  findPath(fromId, toId) {
    // prepare
    const graphClone = _.cloneDeep(this.graph);
    const queue = createQueue();

    graphClone[fromId] = { ...graphClone[fromId], parent: null, cost: 0 };
    queue.addValues(fromId);

    // start
    while (queue.getQueueLength() > 0) {
      const currentNodeId = queue.getValue();
      const { cost, neighbours } = graphClone[currentNodeId];

      if (currentNodeId === toId) {
        return {
          cost: graphClone[toId].cost,
          path: getPath(graphClone, toId, [toId]),
        };
      }

      graphClone[currentNodeId].neighbours.forEach((neighbourId) => {
        const newCost = cost + this.costs.getCost(currentNodeId, neighbourId);

        if (!graphClone[neighbourId].cost || newCost < graphClone[neighbourId].cost) {
          graphClone[neighbourId] = {
            ...graphClone[neighbourId],
            cost: newCost,
            parent: currentNodeId,
          };
        }
      });

      queue.addValues(...neighbours);
    }

    // finish
    return false;
  },
});

// start
const cityGraph = createGraph();

cityGraph.addNode({ id: 0, name: 'me', neighbours: [1, 2] });
cityGraph.addNode({ id: 1, name: 'cat', neighbours: [3, 4] });
cityGraph.addNode({ id: 2, name: 'dog', neighbours: [3, 4] });
cityGraph.addNode({ id: 3, name: 'turtle', neighbours: [] });
cityGraph.addNode({ id: 4, name: 'mouse', neighbours: [5, 6] });
cityGraph.addNode({ id: 5, name: 'uranus', neighbours: [] });
cityGraph.addNode({ id: 6, name: 'lanus', neighbours: [] });

cityGraph.costs.addCost(0, 1, 2);
cityGraph.costs.addCost(0, 2, 1);
cityGraph.costs.addCost(1, 3, 1);
cityGraph.costs.addCost(1, 4, 1);
cityGraph.costs.addCost(2, 3, 1);
cityGraph.costs.addCost(2, 3, 1);
cityGraph.costs.addCost(4, 5, 1);
cityGraph.costs.addCost(4, 6, 1);


export { createCostList, createGraph, createQueue };

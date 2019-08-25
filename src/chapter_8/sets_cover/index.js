/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/**
 * Вы открываете собственную авторскую программу на радио и хотите, чтобы вас слушали во всех 50 штатах.
 * Нужно решить, на каких радиостанциях должна транслироваться ваша передача. Каждая станция стоит денег,
 * поэтому количество станций необходимо свести к минимуму.
 *
 * Каждая станция покрывает определенный набор штатов, эти наборы перекрываются.
 *
 * Как найти минимальный набор станций, который бы покрывал все 50 штатов?
 *
 */


const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {};
stations.kone = new Set(['id', 'nv', 'ut']);
stations.ktwo = new Set(['wa', 'id', 'mt']);
stations.kthree = new Set(['or', 'nv', 'ca']);
stations.kfour = new Set(['nv', 'ut']);
stations.kfive = new Set(['ca', 'az']);


const findOptimalStationCover = (stations, states) => {
  let statesNeeded = new Set([...states]);
  const finalStations = new Set();

  while (statesNeeded.size > 0) {
    let bestStation = null;
    let statesCovered = new Set();

    for (const station in stations) {
      const statesForStation = stations[station];

      const covered = new Set([...statesNeeded]
        .filter(x => statesForStation.has(x)));

      console.log(station, covered.size, statesCovered.size);
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    finalStations.add(bestStation);
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
  }

  return finalStations;
};

const result = findOptimalStationCover(stations, statesNeeded);
console.log(result);

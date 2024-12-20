class Graph2 {
  constructor() {
    // Структура графа: ключ - название узла, значение - объект с атрибутами и массивом соседей
    this.graphStructure = {};
  }

  // Метод для добавления узла в граф
  addVertex(name, attributes = {}) {
    // Проверяем, если узел ещё не существует, создаём его
    if (!this.graphStructure[name]) {
      this.graphStructure[name] = { attributes, neighbors: [] };
    }
  }

  // Метод для добавления ребра между двумя узлами
  addEdge(mainVertex, childVertex, weight) {
    // Если узлы ещё не существуют, создаём их
    if (!this.graphStructure[mainVertex]) {
      this.addVertex(mainVertex);
    }
    if (!this.graphStructure[childVertex]) {
      this.addVertex(childVertex);
    }

    // Добавляем соседей с весом ребра
    this.graphStructure[mainVertex].neighbors.push({ node: childVertex, weight });
  }

  // Реализация алгоритма Дейкстры для нахождения кратчайшего пути
  dijkstra(start, target) {
    // Создаём объект для хранения минимальных расстояний до узлов
    const distances = {};
    // Создаём объект для хранения предыдущих узлов в кратчайшем пути
    const previous = {};
    // Создаём очередь с приоритетом для обработки узлов
    const priorityQueue = new Set();

    // Инициализируем граф: все расстояния бесконечны, кроме стартового узла
    for (const vertex in this.graphStructure) {
      distances[vertex] = Infinity; // Устанавливаем бесконечность для всех узлов
      previous[vertex] = null; // Предыдущие узлы изначально неизвестны
      priorityQueue.add(vertex); // Добавляем все узлы в очередь
      // console.log({distances, previous, priorityQueue})
    }
    distances[start] = 0; // Расстояние до стартового узла равно 0
    // console.log({distances, previous, priorityQueue})

    while (priorityQueue.size > 0) {
      // Выбираем узел с минимальным расстоянием
      let currentNode = [...priorityQueue].reduce((minNode, node) =>
        distances[node] < distances[minNode] ? node : minNode
      );
      // console.log(currentNode, priorityQueue)
      priorityQueue.delete(currentNode); // Убираем узел из очереди

      // Если нашли целевой узел, восстанавливаем путь
      if (currentNode === target) {
        return this.reconstructPath(previous, target);
      }

      // Обрабатываем всех соседей текущего узла
      for (const neighbor of this.graphStructure[currentNode].neighbors) {
        // console.log('currentNode - ', currentNode, 'CurrentNode -', neighbor)
        // console.log(this.graphStructure[currentNode], priorityQueue)
        const { node, weight } = neighbor;
        const alt = distances[currentNode] + weight; // Новое потенциальное расстояние
        // console.log(distances, distances[currentNode], weight, alt)
        // console.log('distances', distances)
        // console.log('distances[currentNode]', distances[currentNode])
        // console.log('weight', weight)
        // console.log('alt', alt)
        // console.log('node', node)
        // console.log( )


        // Если нашли более короткий путь к соседу, обновляем данные
        if (alt < distances[node]) {
          distances[node] = alt;
          previous[node] = currentNode; // Указываем, что текущий узел предшествует соседу
        }
      }
    }

    // Если целевой узел недостижим, возвращаем null
    return null;
  }

  // Восстанавливаем путь на основе объекта previous
  reconstructPath(previous, target) {
    const path = [];
    let step = target;

    // Идём назад от целевого узла до начального
    while (step) {
      path.push(step);
      step = previous[step];
    }

    return path.reverse().join(" => "); // Возвращаем путь в читаемом формате
  }
}

// Создаём граф
const myGraph = new Graph2();
priorityQueue.add(vertex); // Добавляем все узлы в очередь
// console.log({distances, previous, priorityQueue})

distances[start] = 0; // Расстояние до стартового узла равно 0
// console.log({distances, previous, priorityQueue})

while (priorityQueue.size > 0) {
  // Выбираем узел с минимальным расстоянием
  let currentNode = [...priorityQueue].reduce((minNode, node) =>
    distances[node] < distances[minNode] ? node : minNode
  );
  // console.log(currentNode, priorityQueue)
  priorityQueue.delete(currentNode); // Убираем узел из очереди

  // Если нашли целевой узел, восстанавливаем путь
  if (currentNode === target) {
    return this.reconstructPath(previous, target);
  }

  // Обрабатываем всех соседей текущего узла
  for (const neighbor of this.graphStructure[currentNode].neighbors) {
    // console.log('currentNode - ', currentNode, 'CurrentNode -', neighbor)
    // ...existing code...
  }
  // ...existing code...
}
// ...existing code...priorityQueue.add(vertex); // Добавляем все узлы в очередь
// console.log({distances, previous, priorityQueue})

distances[start] = 0; // Расстояние до стартового узла равно 0
// console.log({distances, previous, priorityQueue})

while (priorityQueue.size > 0) {
  // Выбираем узел с минимальным расстоянием
  let currentNode = [...priorityQueue].reduce((minNode, node) =>
    distances[node] < distances[minNode] ? node : minNode
  );
  // console.log(currentNode, priorityQueue)
  priorityQueue.delete(currentNode); // Убираем узел из очереди

  // Если нашли целевой узел, восстанавливаем путь
  if (currentNode === target) {
    return this.reconstructPath(previous, target);
  }

  // Обрабатываем всех соседей текущего узла
  for (const neighbor of this.graphStructure[currentNode].neighbors) {
    // console.log('currentNode - ', currentNode, 'CurrentNode -', neighbor)
    // ...existing code...
  }
  // ...existing code...
}
// ...existing code...
// Добавляем вершины и рёбра с весами
myGraph.addEdge("A", "B", 1);
myGraph.addEdge("A", "C", 4);
myGraph.addEdge("B", "C", 2);
myGraph.addEdge("B", "D", 6);
myGraph.addEdge("C", "D", 3);
myGraph.addEdge("D", "E", 1);

// Вызываем алгоритм Дейкстры
console.log('START')
console.log(myGraph.dijkstra("A", "E")); // Вывод: кратчайший путь

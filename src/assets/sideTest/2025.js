class NewYear2025 {
  constructor() {
    this.graphStructure = {}
  }

  addVertex(name, atributes = {}) {
    if (!this.graphStructure[name]) {
      this.graphStructure[name] = { childs: [], atributes }
    }
  }

  addEdge(mainNode, childNode, weight) {
    if (!this.graphStructure[mainNode]) {
      this.addVertex(mainNode)
    }
    if (!this.graphStructure[childNode]) {
      this.addVertex(childNode)
    }

    this.graphStructure[mainNode].childs.push({node: childNode, weight})
  }

  dijkstra(start, target) {
    const queue = new Set()
    const distances = {}
    const previousParent = {}

    for(let vertex in this.graphStructure){
      queue.add(vertex)
      distances[vertex] = Infinity
      previousParent[vertex] = null
    }

    distances[start] = 0
    while (queue.size > 0) {
      let currentNode = [...queue].reduce((minNode, node) =>
        distances[minNode] < distances[node] ? minNode : node)

      queue.delete(currentNode)
      if (currentNode === target) {
        return this.reconstruction(previousParent, target)
      }

      for(let child of this.graphStructure[currentNode].childs){
        let {node, weight} = child
        let altWeight = distances[currentNode] + weight

        if (altWeight < distances[node]) {
          distances[node] = altWeight
          previousParent[node] = currentNode
        }
      }
    }
  }

  reconstruction(previousData, target){
    let currentStep = target
    let path = []

    while (currentStep) {
      path.push(currentStep)
      currentStep = previousData[currentStep]
    }

    return path.reverse().join(' => ')
  }
}

let graph = new NewYear2025()
graph.addEdge("A", "B", 2);
graph.addEdge("A", "C", 5);
graph.addEdge("A", "D", 1);

graph.addEdge("B", "E", 3);
graph.addEdge("B", "F", 2);

graph.addEdge("C", "F", 1);
graph.addEdge("C", "G", 7);

graph.addEdge("D", "H", 4);

graph.addEdge("E", "I", 6);

graph.addEdge("F", "I", 3);
graph.addEdge("F", "J", 2);

graph.addEdge("G", "J", 4);

graph.addEdge("H", "J", 6);
graph.addEdge("H", "K", 8);

graph.addEdge("I", "L", 5);

graph.addEdge("J", "L", 3);
graph.addEdge("J", "M", 2);

graph.addEdge("K", "M", 4);


// Вызываем алгоритм Дейкстры
console.log('START')
console.log(graph.dijkstra("A", "M"));
class NewYear2025 {
  constructor(){
    this.graphStructure = {}
  }

  addVertex(name){
    if (!this.graphStructure[name]) {
      this.graphStructure[name] = {kids: []}
    }
  }

  addEdge(mainVertex, childVertex, weight){
    if (!this.graphStructure[mainVertex]) {
      this.addVertex(mainVertex)
    }
    if (!this.graphStructure[childVertex]) {
      this.addVertex(childVertex)
    }
    // console.log(this.graphStructure)
    this.graphStructure[mainVertex].kids.push({node: childVertex, weight})
  }

  dijkstra(start, target){
    const distances = {}
    const queue = new Set()
    const previousNode = {}

    for(let node in this.graphStructure){
      distances[node] = Infinity;
      queue.add(node)
      previousNode[node] = null
    }

    distances[start] = 0

    while(queue.size > 0){
      const currentNode = [...queue].reduce((minNode, maxNode) =>
      distances[minNode] < distances[maxNode] ? minNode : maxNode)

      if (currentNode === target) {
        return this.reconstruction(previousNode, target)
      }

      queue.delete(currentNode)
      // console.log(currentNode)
      for(let kid of this.graphStructure[currentNode].kids){
        let {node, weight} = kid
        let alt = distances[currentNode] + weight

        if(alt < distances[node]){
          distances[node] = alt
          previousNode[node] = currentNode
        }
      }
    }


  }

  reconstruction(previousNode, target){
    let currentStep = target;
    let path = []

    while(currentStep){
      path.push(currentStep)
      currentStep = previousNode[currentStep]
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


const search = function(nums, target) {
  let mid, left, right

  while(true){
      mid = nums.length / 2
      left = nums[0]
      right = nums[length - 1]
      if(nums[mid] === target) return nums[mid]
      nums
  }
};
class Graph {
  constructor() {
    this.adjacencyList = {};  // Объект для хранения графа
  }

  // Метод для добавления вершины с дополнительными аттрибутами
  addVertex(vertex, attributes) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = { attributes, edges: [] };
      console.log(vertex, this.adjacencyList[vertex])
    }
  }

  // Метод для добавления связи между фильмами
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1, {});
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2, {});
    }
    this.adjacencyList[vertex1].edges.push(vertex2);
    this.adjacencyList[vertex2].edges.push(vertex1);  // Если граф ненаправленный
  }

  // Метод для вывода всех фильмов и их связей
  printGraph() {
    for (let vertex in this.adjacencyList) {
      const { attributes, edges } = this.adjacencyList[vertex];
      console.log(`${vertex} (Genre: ${attributes?.genre}, Rating: ${attributes?.rating}) -> ${edges.join(', ')}`);
    }
  }
}

// Создаем граф фильмов
const movieGraph = new Graph();

// Добавляем фильмы с аттрибутами (жанр, оценка)
movieGraph.addVertex('The Matrix', { genre: 'Sci-Fi', rating: 8.7 });
movieGraph.addVertex('Inception', { genre: 'Sci-Fi', rating: 8.8 });
movieGraph.addVertex('Interstellar', { genre: 'Sci-Fi', rating: 8.6 });
movieGraph.addVertex('The Dark Knight', { genre: 'Action', rating: 9.0 });
movieGraph.addVertex('Memento', { genre: 'Thriller', rating: 8.4 });
movieGraph.addVertex('Чел0веческая мн0г0н0жка')

// Добавляем связи между фильмами
movieGraph.addEdge('The Matrix', 'Inception');
movieGraph.addEdge('Inception', 'Interstellar');
movieGraph.addEdge('The Dark Knight', 'Inception');
movieGraph.addEdge('Memento', 'The Dark Knight');
movieGraph.addEdge('Чел0веческая мн0г0н0жка', 'The Dark Knight');

// Печатаем граф с аттрибутами
movieGraph.printGraph();

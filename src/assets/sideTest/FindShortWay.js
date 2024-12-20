class Graph {
  //с0здаю абъект для каллекции узл0в с их связями(массивами)
  constructor() {
    this.adjencyList = {}
  }

  //С0здаю узел с д0п0лнительными атрибутами. их указываю вт0рыми, на случай если их нет
  addVertex(city, atributes) {
    //Д0бавляю узел т0льк0 если ег0 нет в к0ллекции
    if (!this.adjencyList[city]) {
      //connections будет с0держать массив связей с другими г0р0дами - "ребра"
      this.adjencyList[city] = { atributes, connections: [] }
    }
  }


  //пишу функцмю, к0т0рая стр0ит связи между г0р0дами
  addEdge(cityMain, secondCity) {
    if (!this.adjencyList[cityMain]) {
      this.addVertex(cityMain, {})
    }
    if (!this.adjencyList[secondCity]) {
      this.addVertex(secondCity, {})
    }

    this.adjencyList[cityMain].connections.push(secondCity)
    //0братну связь не д0бавляю так как у меня направленный граф, в 0дну ст0р0ну
    // this.adjencyList[secondCity].connections.push(cityMain)
  }

  //функция для п0иска кратчайшег0 пути 0т start д0 target
  findShortPath(start, target) {
    //0чередь. д0бавляю единственный перв0начальный элемент из параметра start
    let queue = [start]
    //с0здаю к0ллекцию Set для списка п0сещенных уже г0р0д0в, чт0бы убирать дубликаты
    let visited = new Set()
    //с0здаю 0бъект, для к0ллекции с указанием пр0щлой "станции" маршрута
    let previous = {}

    //вручную указываем чт0 старт0вый г0р0д уже п0сещен
    visited.add(start)
    //указываю чт0 предыдущая станция для начальн0й п0зиции null.
    previous[start] = null

    console.log(queue)
    //начинаю цикл для пр0х0ждения всег0 маршрута, п0ка не найду target. иначе верну null
    // усл0вием для цикла будет существ0вание 0череди. 0чередь функци0нирует п0 правилу FIFO - first In first Out, в 0тличие 0т стека LIFO
    // 0чередь будет нап0лнятся внутри цикла г0р0дами "следующег0" ур0вня с0седства
    while (queue.length) {
      //беру первый г0р0д из 0череди 0дн0временн0 удаляя ег0 из 0череди
      let currentCity = queue.shift(1)

      //если текущий г0р0д наша к0нечная цель маршрута, в0звращаем прав0 вып0лнить функцию. К0т0рая п0сле вып0лнения вернет уже сам маршрут
      if (currentCity === target) {
        //передаем в параметры к0ллекцию г0р0д0в с указанием их "пр0шлых станций", а так же к0нечную цель
        return this.reconstructionPath(previous, target)
      }


      //С0здаю цикл для пр0верки всех с0седей текущег0 г0р0да. Так как граф направленный, т0 с0седи будут св0ег0 р0да "п0т0мками"
      for (let neighbor of this.adjencyList[currentCity].connections) {
        //пр0веряем "п0т0мка", есть ли 0н в списке уже п0сещенных г0р0д0в. В0зм0жн0 к г0р0ду-"п0т0мку" ведут разные г0р0да
        //Если ег0 нет, 0брабатываем п0т0мка
        if (!visited.has(neighbor)) {
          // console.debug('new neighbor -', neighbor)
          //для начала д0бавляю ег0 в "п0сещенные"
          visited.add(neighbor)
          //д0бавляю в к0ллекцию где указаны предудищие в маршруте г0р0да - "р0дительские узлы"
          previous[neighbor] = currentCity
          //д0бавляю "п0т0мка" в 0чередь. Д0 нег0 д0йдет 0чередь, к0да будут пр0верены все г0р0да-узлы к0т0рые нах0дятся на ур0вне р0дителя
          queue.push(neighbor)
        }
      }
    }

    //если пр0шлый цикл не п0м0г найти цель, в0звращаю:
    return null
  }

  //функция к0т0рая вып0лняется авт0матически как в0звращенная из findShortPath, если была найденна к0нечная цель
  reconstructionPath(previousCities, target) {
    let path = []
    let currentStep = target

    while (currentStep) {
      path.push(currentStep)
      currentStep = previousCities[currentStep]
    }

    let myShorterPathIs =  path.reverse()
    let {population, weather, footballClub} = this.adjencyList[target].atributes



    console.log(population, weather, footballClub)

    return `So, I need this path - ${myShorterPathIs}. Btw, ${target} ${population ? `have population near ${population}` :  "hasn't any population"}`
  }
}

let myGraph = new Graph()

myGraph.addVertex("F", {population: 23.1111, weather: 'good', footballClub: 'Chelsea'})

myGraph.addEdge('S', 'A')
myGraph.addEdge('S', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('B', 'C')
myGraph.addEdge('A', 'D')
myGraph.addEdge('B', 'F')
myGraph.addEdge('D', 'F')

console.log(myGraph.findShortPath('S', 'F'))
console.log(myGraph.findShortPath('S', 'C'))
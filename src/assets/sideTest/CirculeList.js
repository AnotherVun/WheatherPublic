class CircularList {
  constructor(...args) {
    // your code
    this.arrObj = [...args]


    this.currentIndex = 'start'
    this.position = this.arrObj[this.currentIndex]
  }

  next() {
    // your code
    if(this.currentIndex == 'start') this.currentIndex = this.arrObj.length - 1

    this.currentIndex = (this.currentIndex + 1) % this.arrObj.length
    this.position = this.arrObj[this.currentIndex]

    return this.position
  }

  prev() {
    // your code
    if(this.currentIndex == 'start') this.currentIndex = 0

    this.currentIndex = (this.currentIndex - 1 + this.arrObj.length) % this.arrObj.length
    this.position = this.arrObj[this.currentIndex]

    return this.position
  }
}

let myList = new CircularList('One', 'Two', 'Three')

// console.log(myList)
console.log(myList.prev())
console.log(myList.next())
console.log(myList.next())
console.log(myList.prev())
console.log(myList.prev())
console.log(myList.prev())
console.log(myList.prev())
console.log(myList.prev())
console.log(myList.prev())
console.log(myList.next())
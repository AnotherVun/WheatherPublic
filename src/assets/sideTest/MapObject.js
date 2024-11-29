let ob = {
  club: 'Chelsea',
  star: 'Drogba'
}

let fcMap = new Map(Object.entries(ob))

console.log(fcMap)


let someArr = [['fruit', 'banana'], ['vegetebla', 'potato']]

let eats = Object.fromEntries(someArr)
console.log(eats)
let str = 'meat'

let mapFromEatOb = new Map(Object.entries(eats))
let mapFromEatArray = new Map(someArr)
let mapFromEatStr = new Map(Object.entries(str))
console.log(mapFromEatOb)
console.log(mapFromEatArray)
console.log(mapFromEatStr)

let securuty = new Set()

securuty.add('Ivan')
securuty.add('Dima')
securuty.add('Ivan')
securuty.add('Sveta')
securuty.add('Ivan')
securuty.add('Petr')
securuty.add('Sveta')
securuty.add('Dima')


console.log(securuty)
console.log(securuty.keys())
console.log(securuty.values())
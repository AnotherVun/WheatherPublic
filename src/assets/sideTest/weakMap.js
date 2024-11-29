let start = new Date()

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let data = new WeakMap()

messages.forEach(e => data.set(e, e.from))

console.log(data.has(messages[1]))
console.log(data.has())
console.log(data.has('asdsd'))

for (let index = 0; index < messages.length; index++) {
  console.log(data.get(messages[index]))
}


// test

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(ob){
  return Object.entries(ob).reduce((ac, [_, salary]) => ac + salary, 0)
}

console.log(sumSalaries(salaries))

console.log('destruction:')

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] = []// первый элемент items присваивается в item1, второй в item2
} = {}) {
  console.log( `${title} ${w} ${h}` ); // My Menu 100 200
  console.log( item1 ); // Item1
  console.log( item2 ); // Item2
}

console.log(showMenu(options));
console.log(showMenu());

console.log('\ndate')

let time = new Date()
console.log(time.getHours())
console.log(time.getTime())
console.log(time.getMonth())
console.log(time.getTimezoneOffset())

let end = new Date()

console.log(`Code have been end in ${end - start}`)

console.log('asdsa', JSON.stringify(options, null, 5))
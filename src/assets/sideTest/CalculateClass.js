class AdvancedCalculator{
  constructor(){
    this.operations = {}
  }

  addOperation(name, func){
    this.operations[name] = func
  }

  calculate(expression){
    // let [a, rest, b] = [expression[0],expression.slice(1, expression.length - 1),expression.at(-1)]
    let arr = expression.split(' ')

    if (arr.length == 3) {
      let [a, op, b] = arr
      return this.operations[op](+a,+b)
    }
    if(arr.length == 4){
      let [a, op1, op2, b] = arr
      return this.operations[op2](this.operations[op1](+a), +b)
    }
    if(arr.length == 2) return this.operations[arr[1]](arr[0])
  }
}

let advCalc = new AdvancedCalculator();

advCalc.addOperation('^', (a, b) => Math.pow(a, b));
advCalc.addOperation('double', (a) => a * 2);
advCalc.addOperation('+', (a, b) => a + b);


console.log(advCalc.calculate('4 ^ 2'));        // 16
console.log(advCalc.calculate('5 double'));     // 10
console.log(advCalc.calculate('3 double ^ 2')); // 36
console.log(advCalc.calculate('4 + 5'));        // 9

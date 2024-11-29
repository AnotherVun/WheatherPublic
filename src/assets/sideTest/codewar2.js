function Calculator(){
  this.methods = {}

  this.addMethod = function(nameFunc, func){
    this.methods[nameFunc] = func
  }

  this.calculate = function(expression) {
    let arr = expression.split(' ')
    let a = arr[0]
    let b = arr[2]
    let op = arr[1]

    return this.methods[op](a,b)
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("*+*", (a, b) => a * a + b * b);



console.log(powerCalc.calculate("4 ** 2"))
console.log(powerCalc.calculate("7 * 2"))
console.log(powerCalc.calculate("5 *+* 4"))
class StringTransformer{
  constructor(){
    this.methods = {

    }
  }

  addTransformation(name, func){
    this.methods[name] = func
  }

  transform(str, transformationName){
    if (!this.methods[transformationName]) {
      throw new Error(`Transformation "${transformationName}" doesn't exist`);
    }
    return this.methods[transformationName](str);

  }
}

let transformer = new StringTransformer();

transformer.addTransformation('upper', str => str.toUpperCase());
transformer.addTransformation('reverse', str => str.split('').reverse().join(''));
console.log(transformer.methods)

console.log(transformer.transform('world', 'reverse'));  // "dlrow"
try {
  console.log(transformer.transform('test', 'lower'));
} catch (error) {
  console.log(error.message)
}
  // Ошибка: Unknown transformation
console.log(transformer.transform('hello', 'upper'));    // "HELLO"

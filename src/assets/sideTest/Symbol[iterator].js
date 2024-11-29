let testOb = {
  name: 'Stas',
  age: 25,
  status: true,

  [Symbol.iterator](){
    let enties = Object.entries(this)
    let index = 0

    return {
      next: function(){
        if(index < enties.length){
          return {value: enties[index++], done: false}
        }
        return {done: true}
      }
    }
  }
}

for(let [key, value] of testOb){
  console.log('key -', key, 'value -', value)
}

let notIterOb = {
  a: 12,
  b: 21,
  c: 'addsad'
}
let arr = [...testOb]
let notIterArr = {...notIterOb}
console.log(arr)
console.log(notIterArr)

let handleIteratorOfMyOb = testOb[Symbol.iterator]

console.log('handleIetrator is - ', handleIteratorOfMyOb)
// console.log('handleIetrator is - ', handleIteratorOfMyOb.next())
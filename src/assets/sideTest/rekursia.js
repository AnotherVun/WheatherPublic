// function factorial(num){
//   if (num === 1) {
//     return 1
//   }
//   return num * factorial(num - 1)
// }

// console.log(factorial(3))

// // Фибаначи

// function fibonachi(num, memo = {}) {
//   console.log(`Вызов: fibonachi(${num})`);
//   if(num in memo) return memo[num]
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   memo[num] = fibonachi(num - 1, memo) + fibonachi(num - 2, memo);
//   console.log(`Результат fibonachi(${num}): ${memo[num]}`);
//   return memo[num]
// }

// console.log(fibonachi(8))

// function summ(array) {
//   console.log('start cicle')
//   if (array.length === 0) return 0
//   let result = ''
//   result = array[0] + summ(array.slice(1))
//   console.log(result)

//   return result
// }

// console.log(summ([1, 4, 12, 3]))

// function reverse(str) {

//   if(str.length === 0) return ''

//   return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse('KCUF'))


//Разделяй и власвуй

// function divideAndGlory(width, heigh) {
//   let max = Math.max(width, heigh)
//   let min = Math.min(width, heigh)
//   if (max % min == 0) return min

//   return divideAndGlory(max % min, min)
// }

// console.log(divideAndGlory(1680, 640))


//Быстрая с0ртир0вка

// function quickSort(array){
//   if (array.length < 2) {
//     return array
//   }
//   let pivot = array[0]
//   let less = array.slice(1).filter(element => element <= pivot)
//   let greater = array.slice(1).filter(element => element > pivot)



//   //была 0шибка пре0браз0вания:
//   // return quickSort(less) + pivot + quickSort(greater)
//   // исправил:
//   return [...quickSort(less), pivot, ...quickSort(greater)]
// }




function fibon(num, hash = {}) {
  if(num === 0) return 0
  if(num === 1) return 1
  if(num in hash) return memo[num]

  memo[num] = fibon(num - 2, memo) + fibon(num - 1, memo)

  return memo[num]
}

console.log(fibon(90))


function quickSort(arr) {
  if(arr.length < 2) return arr

  let pivot = arr[0]
  let smaller = arr.slice(1).filter(element => element <= pivot)
  let greater = arr.slice(1).filter(element => element > pivot)

  return [...quickSort(smaller), pivot, ...quickSort(greater)]
}
console.log(quickSort([19, 10, 4, 92, 2, 18, 28, 18]))
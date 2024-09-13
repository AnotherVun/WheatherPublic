function diagonal(matrix) {
  const primary = matrix
    .map((element, i) => element[i])
    .reduce((a,b) => a + b)
  const secondary = matrix
    .map((element,i) => element.reverse()[i])
    .reduce((a,b) => a + b)

  if(primary == secondary) return 'Draw!'
  return  primary > secondary ? 'Principal Diagonal win!' : 'Secondary Diagonal win!'
}

console.log(diagonal([ [2,2,5],
  [4,3,6],
  [1,8,5] ]))
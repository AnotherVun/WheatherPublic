const someArr = [1, 4, 5, 9, 15, 23, 45, 99]

const findTarget = (target, array) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log(left, right, mid)
    if(array[mid] === target) return mid

    if(array[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return 'target doesnt exist'
}

console.log(findTarget(99, someArr))
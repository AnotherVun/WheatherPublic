function createBox(w, h) {
  // Создаём массив h x w, заполненный нулями
  const arr = Array.from({ length: h }, () => Array(w).fill(0));

  let checkNumber = Math.min(w, h) / 2
  let count = 1
  let lawyer = 0

  while (count < checkNumber) {
    for (let i = count; i <= checkNumber; i++) {
      arr[count - w - lawyer][i] = co
      arr[arr.length - count- 1].fill(lawyer)
    }
    count++
    lawyer++
  }

  return arr;
}

console.log(createBox(5, 7));

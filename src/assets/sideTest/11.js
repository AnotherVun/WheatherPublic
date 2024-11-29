
let tablet2 = [['S', 'A', 'T', 'O', 'R'],
['A', 'R', 'E', 'P', 'O'],
['T', 'E', 'N', 'E', 'T'],
['O', 'P', 'E', 'R', 'A'],
['R', 'O', 'T', 'A', 'S']]

let tablet3 = [['S', 'A', 'T', 'O', 'R'],
['A', 'R', 'E', 'P', 'O'],
['O', 'P', 'E', 'R', 'A'],
['T', 'E', 'N', 'E', 'T'],
['R', 'O', 'T', 'A', 'S']]


let tablet1 = [['B', 'A', 'T', 'S'],
               ['A', 'B', 'U', 'T'],
               ['T', 'U', 'B', 'A'],
               ['S', 'T', 'A', 'B']]

// function isSatoSquare(tablet) {
//   const n = tablet.length;


//   for (let i = 0; i < n; i++) {
//     // Проверка строки с ее обратной версией
//     // console.log(tablet[i].join(''), tablet.toReversed()[i].toReversed().join(''))
//     if (tablet[i].join('') !== tablet.slice().reverse()[i].join('')) {
//       return false;
//     }

//     for(let st = 0; st < n; st++){
//       // console.log(tablet[i][st], tablet[n - 1 - st][n - 1 -i])
//       if(tablet[i][st] !== tablet[n - 1 - st][n - 1 -i]) {
//         return false
//       }
//     }

// }
//   return true
// }

function isSatoSquare(tablet) {
  const n = tablet.length;

  for (let i = 0; i < n; i++) {
    console.log(`Строка ${i}:`, tablet[i].join(''));
    console.log(`Перевернутая строка ${i}:`, tablet[i].slice().reverse().join(''));
    if (tablet[i].join('') !== tablet[i].slice().reverse().join('')) {
      console.log(`Ошибка на строке ${i}`);
      return false;
    }

    for (let st = 0; st < n; st++) {
      console.log(`Сравнение: ${tablet[i][st]} === ${tablet[n - 1 - st][n - 1 - i]}`);
      if (tablet[i][st] !== tablet[n - 1 - st][n - 1 - i]) {
        console.log(`Ошибка на индексе ${st} в строке ${i}`);
        return false;
      }
    }
  }
  return true;
}

console.log(isSatoSquare(tablet1))
console.log(isSatoSquare(tablet2))
console.log(isSatoSquare(tablet3))
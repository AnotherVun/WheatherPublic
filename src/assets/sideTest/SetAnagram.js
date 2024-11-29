let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Эта функция удаляет анаграммы из массива,
// оставляя только по одному представителю каждого набора анаграмм.
function clearAnagram(arr) {
  let myMap = new Map();

  // Итерируемся по каждому слову в массиве
  arr.forEach(word => {
    // Преобразуем слово в нижний регистр, сортируем буквы и соединяем их обратно в строку.
    let sortedWord = word.toLowerCase().split('').sort().join('');

    // Если слово с такой сортировкой еще не встречалось в `myMap`, добавляем его.
    if (!myMap.has(sortedWord)) {
      myMap.set(sortedWord, word);
    }
  });

  // Возвращаем массив с уникальными словами (без анаграмм).
  return [...myMap.values()];
}

// Тестовые случаи
const tests = [
  { input: ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"], expected: ["nap", "teachers", "ear"] },
  { input: ["a", "ab", "ba", "abc", "cba"], expected: ["a", "ab", "abc"] },
  { input: ["a", "a", "a", "a"], expected: ["a"] },
  { input: [], expected: [] },
];

// Проверка тестовых случаев
tests.forEach((test, index) => {
  const result = clearAnagram(test.input);
  console.log(`Тест ${index + 1}:`);
  console.log(`Входные данные: ${test.input}`);
  console.log(`Ожидаемый результат: ${test.expected}`);
  console.log(`Полученный результат: ${result}`);
  console.log(result === test.expected ? "Пройден" : "Не пройден");
  console.log("----");
});
function* movieComments() {
  const comments = []; // Массив для хранения комментариев

  while (true) {
    const newComment = yield; // Ожидаем новый комментарий
    if (newComment) {
      comments.push(newComment); // Добавляем новый комментарий в массив
      yield `Комментарий добавлен: "${newComment}"`; // Подтверждаем добавление
    } else if (comments.length > 0) {
      yield comments.shift(); // Возвращаем первый комментарий и удаляем его из массива
    } else {
      yield "Нет комментариев"; // Если комментариев нет
    }
  }
}

// Использование генератора
const commentsGenerator = movieComments();

// Добавление комментариев
console.log(commentsGenerator.next().value); // undefined (ожидание первого комментария)
console.log(commentsGenerator.next("Это потрясающий фильм!").value); // "Комментарий добавлен: "Это потрясающий фильм!""
console.log(commentsGenerator.next("Актерская игра отличная!").value); // "Комментарий добавлен: "Актерская игра отличная!""

// Извлечение комментариев
console.log(commentsGenerator.next().value); // "Это потрясающий фильм!"
console.log(commentsGenerator.next().value); // "Актерская игра отличная!"
console.log(commentsGenerator.next().value); // "Нет комментариев"

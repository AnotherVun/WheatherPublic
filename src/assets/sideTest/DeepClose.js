// Функция для создания издателя
function createPublisher() {
  // Массив для хранения подписчиков (функций обратного вызова)
  const subscribers = [];

  // Функция для добавления подписчика
  function addSubscriber(callback) {
    // Добавляем функцию обратного вызова в массив подписчиков
    subscribers.push(callback);

    // Функция для уведомления всех подписчиков
    function notifySubscribers(message) {
      // Проходим по всем подписчикам и вызываем их с переданным сообщением
      subscribers.forEach((callback) => callback(message));
    }

    // Возвращаем функцию для уведомления подписчиков
    return notifySubscribers;
  }

  // Возвращаем объект с методом subscribe, который добавляет подписчика
  return {
    subscribe: addSubscriber,
  };
}

// Использование

// Создаем издателя, вызывая функцию createPublisher
const publisher = createPublisher();

// Выводим объект издателя в консоль
console.log(publisher);

// Подписываемся на уведомления, добавляя функцию обратного вызова
const notify = publisher.subscribe((msg) => console.log(`Пётр получил: ${msg}`));

// Пример добавления других подписчиков (раскомментируйте для использования)
// publisher.subscribe((msg) => console.log(`Анна получила: ${msg}`));
// publisher.subscribe((msg) => console.log(`Сообщение для всех: ${msg}`));

// Уведомляем всех подписчиков (раскомментируйте для использования)
// notify("Новый пост!");

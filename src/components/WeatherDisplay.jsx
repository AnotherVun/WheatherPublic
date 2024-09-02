import React from 'react';

// Компонент для отображения данных о погоде
function WeatherDisplay({ data }) {
    // Проверка на наличие данных
    if (!data || !data.current) {
        return <p>Нет данных о погоде.</p>; // Сообщение, если данных нет
    }

    // Извлечение данных о погоде
    const { temp_c, condition, humidity, wind_kph } = data.current;
    const time = data.location.localtime
    // Температура, состояние, влажность, скорость ветра
    const iconUrl = condition.icon; // URL иконки состояния погоды

    return (
        <div className="weather-display">
            <h2>Погода в {data.location.name}</h2> {/* Название города */}
            <img src={iconUrl} alt={condition.text} /> {/* Иконка погоды */}
            <p>Температура: {temp_c} °C</p> {/* Температура */}
            <p>Состояние: {condition.text}</p> {/* Состояние погоды */}
            <p>Влажность: {humidity}%</p> {/* Влажность */}
            <p>Скорость ветра: {wind_kph} км/ч</p> {/* Скорость ветра */}
            <p>Местное время : {time}</p>
            {/* Вывод всех показателей в виде списка */}
            {/* <h3>Все данные о погоде:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre> Выводим весь объект JSON */}
        </div>
    );
}

export default WeatherDisplay; // Экспортируем компонент WeatherDisplay
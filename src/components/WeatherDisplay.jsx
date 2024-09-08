import React from "react";

// Компонент для отображения данных о погоде
function WeatherDisplay({ data }) {
  // Проверка на наличие данных
  if (!data) {
    return null; // Сообщение, если данных нет
  }

  // Извлечение данных о погоде
  // const { temp_c, condition, humidity, wind_kph } = data.current;
  // const time = data.location.localtime
  // // Температура, состояние, влажность, скорость ветра
  // const iconUrl = condition.icon; // URL иконки состояния погоды

  return (
    <div className="weather-table">
      <div className="left-column">
        <h2>{data.location.name}</h2>
        <img src={data.current.condition.icon} alt="Weather Icon" />
      </div>
      <div className="right-column">
        <p>Температура: {data.current.temp_c} °C</p>
        <p>Состояние: {data.current.condition.text}</p>
        <p>Влажность: {data.current.humidity} %</p>
        <p>Скорость ветра: {data.current.wind_kph} км/ч</p>
        <p>Время: {data.location.localtime.split(" ")[1]}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay; // Экспортируем компонент WeatherDisplay

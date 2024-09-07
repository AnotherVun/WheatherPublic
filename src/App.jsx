import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Импортируем стили

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey ='9dd754f53dec4a39890145431241908';
    const [marioPosition, setMarioPosition] = useState({ left: '50%', scaleX: 1 });

    useEffect(() => {
        fetchWeather(selectedCity);
    }, [selectedCity]);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMouseMove = (e) => {
        const screenWidth = window.innerWidth;
        const mouseX = e.clientX;

        // Определяем, в какой части экрана находится курсор
        if (mouseX > screenWidth / 2) {
            // Курсор в правой части экрана
            setMarioPosition({
                left: 'calc(100% - 70px)', // Двигаем Марио к правому краю
                scaleX: 1 // Не зеркалим
            });
        } else {
            // Курсор в левой части экрана
            setMarioPosition({
                left: '0', // Двигаем Марио к левому краю
                scaleX: -1 // Зеркалим по горизонтали
            });
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <h1>Приложение с погодой</h1>
            <select
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
            >
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && (
                <div className="weather-table">
                    <div className="left-column">
                        <h2>{weatherData.location.name}</h2>
                        <img src={weatherData.current.condition.icon} alt="Weather Icon" />
                    </div>
                    <div className="right-column">
                        <p>Температура: {weatherData.current.temp_c} °C</p>
                        <p>Состояние: {weatherData.current.condition.text}</p>
                        <p>Влажность: {weatherData.current.humidity} %</p>
                        <p>Скорость ветра: {weatherData.current.wind_kph} км/ч</p>
                    </div>
                </div>
            )}
            <button onClick={() => fetchWeather(selectedCity)}>Получить погоду</button>

            {/* Марио */}
            <div
                className="mario"
                style={{
                    left: marioPosition.left,
                    transform: `scaleX(${marioPosition.scaleX})`
                }}
            ></div>

            {/* Облака */}

        </div>
    );
}

export default App; // Экспортируем компонент App

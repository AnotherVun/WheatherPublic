import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Импортируем стили

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey = 'ВАШ_API_КЛЮЧ';

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
        const shapes = document.querySelectorAll('.neon-shape');
        shapes.forEach(shape => {
            const x = e.clientX + (Math.random() * 200 - 100); // Случайное смещение по X
            const y = e.clientY + (Math.random() * 200 - 100); // Случайное смещение по Y
            shape.style.transform = `translate(${x}px, ${y}px)`; // Перемещение фигуры
        });
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
            {weatherData && <WeatherDisplay data={weatherData} />}
            <button onClick={() => fetchWeather(selectedCity)}>Получить погоду</button>

            {/* Неоновые фигуры */}
            <div className="neon-shape"></div>
            <div className="neon-shape"></div>
            <div className="neon-shape"></div>
        </div>
    );
}

export default App; // Экспортируем компонент App
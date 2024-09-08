import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Импортируем стили

// const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

function App() {
    const [weatherData, setWeatherData] = useState(null);
    // const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('Киев')
    const [error, setError] = useState(null);
    const apiKey ='9dd754f53dec4a39890145431241908';
    const [marioPosition, setMarioPosition] = useState({ left: '50%', scaleX: 1 });

    // useEffect(() => {
    //     fetchWeather(selectedCity);
    // }, [selectedCity]);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            const data = await response.json();
            console.log(data)
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        fetchWeather(city); // Запрашиваем погоду для введенного города
    };

    return (
        <div className="App">
            <h1>Приложение с погодой</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Введите название города"
                />
                <button type="submit">Получить погоду</button>
            </form>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && <WeatherDisplay data={weatherData} />}


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

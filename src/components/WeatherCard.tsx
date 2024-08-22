import React from 'react';
import { WeatherData } from '../types/types';
import '../styles/WeatherCard.scss';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="card fade-in" role="region" tabIndex={0}>
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={'icone de ' + weather.weather[0].description}
        />
      </div>
      <h2 id="weather-card-title">Clima em {weather.name}</h2>
      <p className="temperature">{weather.main.temp}°C</p>
      <p className="weather-description">{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação térmica: {weather.main.feels_like}°C</p>
        <p>Vento: {weather.wind.speed} km/h</p>
        <p>Pressão: {weather.main.pressure} hPa</p>
        <p>Umidade: {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;

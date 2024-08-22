import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import './styles/GlobalStyles.scss';
import { City, WeatherData } from './types/types';

const CITIES: City[] = [
  { value: 'Aracaju', label: 'Aracaju-SE' },
  { value: 'Belém', label: 'Belém-PA' },
  { value: 'Belo Horizonte', label: 'Belo Horizonte-MG' },
  { value: 'Boa Vista', label: 'Boa Vista-RR' },
  { value: 'Brasília', label: 'Brasília-DF' },
  { value: 'Campo Grande', label: 'Campo Grande-MS' },
  { value: 'Cuiabá', label: 'Cuiabá-MT' },
  { value: 'Curitiba', label: 'Curitiba-PR' },
  { value: 'Florianópolis', label: 'Florianópolis-SC' },
  { value: 'Fortaleza', label: 'Fortaleza-CE' },
  { value: 'Goiânia', label: 'Goiânia-GO' },
  { value: 'João Pessoa', label: 'João Pessoa-PB' },
  { value: 'Macapá', label: 'Macapá-AP' },
  { value: 'Maceió', label: 'Maceió-AL' },
  { value: 'Manaus', label: 'Manaus-AM' },
  { value: 'Natal', label: 'Natal-RN' },
  { value: 'Palmas', label: 'Palmas-TO' },
  { value: 'Porto Alegre', label: 'Porto Alegre-RS' },
  { value: 'Porto Velho', label: 'Porto Velho-RO' },
  { value: 'Recife', label: 'Recife-PE' },
  { value: 'Rio Branco', label: 'Rio Branco-AC' },
  { value: 'Rio de Janeiro', label: 'Rio de Janeiro-RJ' },
  { value: 'Salvador', label: 'Salvador-BA' },
  { value: 'São Luís', label: 'São Luís-MA' },
  { value: 'Sao Paulo', label: 'São Paulo-SP' },
  { value: 'Teresina', label: 'Teresina-PI' },
  { value: 'Vitória', label: 'Vitória-ES' },
];

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (city: City) => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city.value,
            appid: process.env.REACT_APP_API_KEY,
            units: 'metric',
            lang: 'pt_br',
          },
        }
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity);
    }
  }, [selectedCity]);

  return (
    <div className="container" role="main" aria-labelledby="page-title">
      <header>
        <h1 id="page-title">
          Informações Meteorológicas das Capitais do Brasil
        </h1>
      </header>
      <div className="select-container">
        <CitySelector
          cities={CITIES}
          selectedCity={selectedCity}
          onChange={setSelectedCity}
        />
      </div>
      {weatherData ? (
        <WeatherCard weather={weatherData} />
      ) : (
        selectedCity && <p>Carregando dados para {selectedCity.label}...</p>
      )}
    </div>
  );
};

export default App;

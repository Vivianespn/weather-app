import React from 'react';
import Select from 'react-select';
import { City } from '../types/types';
import '../styles/CitySelector.scss';

interface CitySelectorProps {
  cities: City[];
  selectedCity: City | null;
  onChange: (city: City | null) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  cities,
  selectedCity,
  onChange,
}) => {
  return (
    <Select
      className="city-selector"
      options={cities}
      value={selectedCity}
      onChange={onChange}
      placeholder="Selecione uma cidade"
      isClearable
      name="city-selector"
      aria-label="Selecionar cidade"
      id="city-selector"
    />
  );
};

export default CitySelector;

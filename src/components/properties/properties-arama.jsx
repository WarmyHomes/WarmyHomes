'use client';

import React, { useState, useEffect, useRef } from 'react';
import './properties-arama.scss';
import SubmitButton from '../common/submit-button/submit-button';

const SearchForm = ({ advertTypeData, categories, cities, onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    propertyStatus: 'all',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  const [filteredCities, setFilteredCities] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const selectRef = useRef(null);

  useEffect(() => {
    if (cityFilter !== '') {
      const filtered = cities.object.filter(city =>
        city.name.toLowerCase().includes(cityFilter.toLowerCase())
      ).slice(0, 10);
      setFilteredCities(filtered);

      if (filtered.length > 0) {
        selectRef.current.size = filtered.length > 10 ? 10 : filtered.length;
        selectRef.current.style.display = 'block';
      } else {
        selectRef.current.style.display = 'none';
      }
    } else {
      setFilteredCities([]);
      if (selectRef.current) {
        selectRef.current.style.display = 'none';
      }
    }
  }, [cityFilter, cities.object]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleCityFilterFocus = () => {
    const filtered = cities.object.slice(0, 10);
    setFilteredCities(filtered);

    if (filtered.length > 0) {
      selectRef.current.size = filtered.length > 10 ? 10 : filtered.length;
      selectRef.current.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with search params:", searchParams);
    onSearch({ ...searchParams, filteredCities });
  };

  const handleCitySelect = (e) => {
    const selectedCity = cities.object.find(city => city.id === parseInt(e.target.value));
    setSearchParams(prevState => ({
      ...prevState,
      location: e.target.value
    }));
    setCityFilter(selectedCity ? selectedCity.name : '');
    selectRef.current.style.display = 'none';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="query" 
        value={searchParams.query} 
        onChange={handleChange} 
        placeholder="Search..." 
      />

      <select 
        name="propertyStatus" 
        value={searchParams.propertyStatus} 
        onChange={handleChange}
      >
        <option value="all">All Status</option>
        {advertTypeData.map((type) => (
          <option key={type.id} value={type.id}>{type.title}</option>
        ))}
      </select>
      
      <select 
        name="propertyType" 
        value={searchParams.propertyType} 
        onChange={handleChange}
      >
        <option value="all">All Types</option>
        {categories.content.map((category) => (
          <option key={category.id} value={category.id}>{category.title}</option>
        ))}
      </select>

      <input 
        type="number" 
        name="minPrice" 
        value={searchParams.minPrice} 
        onChange={handleChange} 
        placeholder="Min Price" 
      />
      <input 
        type="number" 
        name="maxPrice" 
        value={searchParams.maxPrice} 
        onChange={handleChange} 
        placeholder="Max Price" 
      />

      <input 
        type="text" 
        name="locationFilter" 
        value={cityFilter} 
        onChange={handleCityFilterChange} 
        onFocus={handleCityFilterFocus} 
        placeholder="Filter Cities..." 
      />

      <select 
        name="location" 
        value={searchParams.location} 
        onChange={handleCitySelect} 
        ref={selectRef}
        size={filteredCities.length > 10 ? 10 : filteredCities.length}
        style={{ display: 'none' }}
      >
        {filteredCities.map((city) => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>

      <SubmitButton type="submit">Search</SubmitButton>
    </form>
  );
};

export default SearchForm;

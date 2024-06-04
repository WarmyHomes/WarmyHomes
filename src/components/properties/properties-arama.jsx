'use client';

import React, { useState, useRef } from 'react';
import './properties-arama.scss';
import SubmitButton from '../common/submit-button/submit-button';

const SearchForm = ({ categories, data, onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    propertyStatus: '',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  const selectRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const handleCitySelect = (e) => {
    setSearchParams(prevState => ({
      ...prevState,
      location: e.target.value
    }));
  };

  const handleAdvertType = (e) => {
    setSearchParams(prevState => ({
      ...prevState,
      propertyStatus: e.target.value
    }));
  };


  // Benzersiz şehirlerin listesi
  const uniqueCities = Array.from(new Set(data.map(city => city.city_id)))
    .map(city_id => {
      return data.find(city => city.city_id === city_id);
    });

  // Benzersiz şehirlerin listesi
  const uniqueAdvertType = Array.from(new Set(data.map(city => city.advert_type_id)))
    .map(advert_type_id => {
      return data.find(city => city.advert_type_id === advert_type_id);
    });



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
  type="text" 
  name="propertyStatus" 
  value={searchParams.propertyStatus} 
  onChange={handleAdvertType}
>
  <option value="">All Status</option>
  {uniqueAdvertType.map((type) => (
    <option key={type.advert_type_id} value={type.advert_type_id}>
      {type.advert_type_id}
    </option>
  ))}
</select>
   
      <select 
       type="text" 
        name="propertyType" 
        value={searchParams.propertyType} 
        onChange={handleChange}
      >
        <option value="all">All Types</option>
        {categories.content.map((category) => (
          <option key={category.category_id} value={category.category_id}>{category.title}</option>
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

      <select 
        type="text" 
        name="location" 
        value={searchParams.location} 
        onChange={handleCitySelect}
        ref={selectRef}
      >
        <option value="">Select City</option>
        {uniqueCities.map((city) => (
          <option key={city.id} value={city.city_id}>{city.city_id}</option>
        ))}
      </select>

      <SubmitButton type="submit">Search</SubmitButton>
    </form>
  );
};

export default SearchForm;

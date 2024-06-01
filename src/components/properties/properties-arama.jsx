'use client';

import React, { useState } from 'react';
import './properties-arama.scss';

const SearchForm = ({ advertTypeData, categories, onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    propertyStatus: 'all',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Form submit olayının varsayılan davranışını engelle
    onSearch(searchParams); // Arama işlemini gerçekleştir
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
        name="location" 
        value={searchParams.location} 
        onChange={handleChange} 
        placeholder="Location" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

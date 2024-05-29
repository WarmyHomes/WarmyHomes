'use client';

import React, { useState } from 'react';
import './properties-arama.scss';

const SearchForm = ({ advertTypeData, categories, data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [propertyStatus, setPropertyStatus] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');

  const uniqueCities = [...new Set(data.map(item => item.city_id))];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ query, propertyStatus, propertyType, minPrice, maxPrice, location });
  };

  return (
    <form className="property-search-form" onSubmit={handleSearch}>
      <div className="form-group">
        <label htmlFor="search">Find your home</label>
        <input
          type="text"
          id="search"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Property Status</label>
        <div>
          <input
            type="radio"
            id="status-all"
            name="status"
            value="all"
            checked={propertyStatus === 'all'}
            onChange={() => setPropertyStatus('all')}
          />
          <label htmlFor="status-all">All</label>
        </div>
        {advertTypeData.map((status) => (
          <div key={status.id}>
            <input
              type="radio"
              id={`status-${status.id}`}
              name="status"
              value={status.title}
              checked={propertyStatus === status.title}
              onChange={() => setPropertyStatus(status.title)}
            />
            <label htmlFor={`status-${status.id}`}>{status.title}</label>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Property Type</label>
        <div>
          <input
            type="radio"
            id="type-all"
            name="type"
            value="all"
            checked={propertyType === 'all'}
            onChange={() => setPropertyType('all')}
          />
          <label htmlFor="type-all">All</label>
        </div>
        {categories.content.map((status) => (
          <div key={status.id}>
            <input
              type="radio"
              id={`type-${status.id}`}
              name="type"
              value={status.title}
              checked={propertyType === status.title}
              onChange={() => setPropertyType(status.title)}
            />
            <label htmlFor={`type-${status.id}`}>{status.title}</label>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="price-min">Price Range</label>
        <div>
          <input
            type="number"
            id="price-min"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            id="price-max"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">City</option>
          {uniqueCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

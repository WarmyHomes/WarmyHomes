'use client';

import React, { useEffect, useState } from 'react';
import './advert-page.scss';
import { config } from "@/helpers/config";
import { getAuthHeader } from "@/helpers/auth";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [propertyStatus, setPropertyStatus] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [propertyStatuses, setPropertyStatuses] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const API_URL = config.api.baseUrl;

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const headers = await getAuthHeader();
        const response = await fetch(`${API_URL}/advert-types`, {
          method: "get",
          headers,
        });
        const data = await response.json();
        console.log("DATA", data);
        setPropertyType(data);
      } catch (error) {
        console.error('Failed to fetch property data', error);
      }
    };
  
    fetchPropertyData();
  }, []);
  

  const handleSearch = () => {
    onSearch({ query, propertyStatus, propertyType, minPrice, maxPrice, location });
  };

  return (
    <div className="search-form">
      <div>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <label>Property Status</label>
        <div>
          <label>
            <input
              type="radio"
              value="All"
              checked={propertyStatus === 'All'}
              onChange={() => setPropertyStatus('All')}
            />
            All
          </label>
          {propertyStatuses.map(status => (
            <label key={status.id}>
              <input
                type="radio"
                value={status.name}
                checked={propertyStatus === status.name}
                onChange={() => setPropertyStatus(status.name)}
              />
              {status.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>Property Type</label>
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="All">All</option>
          {propertyTypes.map(type => (
            <option key={type.id} value={type.name}>{type.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Price Range</label>
        <div>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label>Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">City</option>
          {locations.map(loc => (
            <option key={loc.id} value={loc.name}>{loc.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;

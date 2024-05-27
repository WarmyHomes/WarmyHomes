'use client';

import React, { useState } from 'react';
import './advert-page.scss';
import PropertyCard from '../common/form-fields/properties-cart';
import SearchForm from './properties-arama.jsx';

const Properties = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchParams) => {
    // Burada filtreleme işlemini yapabilirsiniz
    // Örneğin:
    const filtered = data.filter(property => {
      return (
        (searchParams.query === '' || property.title.toLowerCase().includes(searchParams.query.toLowerCase())) &&
        (searchParams.propertyStatus === 'All' || property.status === searchParams.propertyStatus) &&
        (searchParams.propertyType === 'All' || property.type === searchParams.propertyType) &&
        (searchParams.minPrice === '' || property.price >= parseFloat(searchParams.minPrice)) &&
        (searchParams.maxPrice === '' || property.price <= parseFloat(searchParams.maxPrice)) &&
        (searchParams.location === '' || property.location === searchParams.location)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="home-page">
      <SearchForm onSearch={handleSearch} />
      <div className="properties-grid">
        {filteredData.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.title}
            location={property.location}
            price={property.price}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;

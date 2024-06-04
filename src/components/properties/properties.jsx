'use client';

import React, { useState } from 'react';
import './properties-arama.scss';
import PropertyCard from '../common/form-fields/properties-cart';
import SearchForm from './properties-arama.jsx';

const Properties = ({ data, categories }) => {
  const [filteredData, setFilteredData] = useState(data || []);

  const handleSearch = (searchParams) => {
    
    const {
      query,
      propertyStatus,
      propertyType,
      minPrice,
      maxPrice,
      location
    } = searchParams;

    const filtered = data.filter((item) => {
    
      console.log(item);
      const matchesQuery = !query || item.title.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = !propertyStatus  || item.advert_type_id === propertyStatus;
      const matchesType = propertyType === 'all' || item.category_id === propertyType;
      const matchesPrice = (!minPrice || item.price >= parseFloat(minPrice)) && (!maxPrice || item.price <= parseFloat(maxPrice));
      const matchesLocation = !location || item.city_id === location;

      return matchesQuery && matchesStatus && matchesType && matchesPrice && matchesLocation;
    });


    setFilteredData(filtered);
  };

  
  return (
    <div className="home-page">
      <SearchForm
      
        categories={categories}
        data={data}
        onSearch={handleSearch}
      />
      <div className="properties-grid">
        {filteredData.length > 0 ? (
          filteredData.map((property, index) => (
            <PropertyCard
            key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              imageData={property}
            />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
  );
};

export default Properties;

'use client';

import React, { useState } from 'react'; 
import './properties-arama.scss'; 
import PropertyCard from '../common/form-fields/properties-cart'; 
import SearchForm from './properties-arama.jsx'; 

const Properties = ({ data, advertTypeData, categories }) => {  
  const [filteredData, setFilteredData] = useState(data); 

  const handleSearch = (searchParams) => {  
    const filtered = data.filter(property => {  
      return (
        (searchParams.query === '' || property.title.toLowerCase().includes(searchParams.query.toLowerCase())) && 
        (searchParams.propertyStatus === 'all' || property.advert_type_id === searchParams.propertyStatus) && 
        (searchParams.propertyType === 'all' || property.category_id === searchParams.propertyType) &&  
        (searchParams.minPrice === '' || property.price >= parseFloat(searchParams.minPrice)) && 
        (searchParams.maxPrice === '' || property.price <= parseFloat(searchParams.maxPrice)) &&  
        (searchParams.location === '' || property.city_id === searchParams.location) 
      );
    });
    setFilteredData(filtered);  
  };

  return (
    <div className="home-page">           
      <SearchForm advertTypeData={advertTypeData} categories={categories} data={data} onSearch={handleSearch} />  
      <div className="properties-grid">  
        {filteredData.length > 0 ? (  
          filteredData.map((property, index) => (  
        
            <PropertyCard
              key={index}  
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

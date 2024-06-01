'use client';

import React, { useState } from 'react';
import './properties-arama.scss';
import PropertyCard from '../common/form-fields/properties-cart';
import SearchForm from './properties-arama.jsx';
import { allAdvertsQueryByPage } from '@/services/create-advert-service';

const Properties = ({ data, advertTypeData, categories , cities}) => {
  const [filteredData, setFilteredData] = useState(data || []);

  //console.log("filteredDataee>>>>>>>>>>>>>>",filteredData)
  //console.log("setFilteredData>>>>>>>>>>>>>>",setFilteredData)

  const handleSearch = async (searchParams) => {

    console.log("Aa>>>>>>>>>>>>>>",searchParams)
    const queryParams = new URLSearchParams();

    queryParams.append('query', searchParams.query || 'kira');
    queryParams.append('propertyStatus', searchParams.propertyStatus || 'all');
    queryParams.append('propertyType', searchParams.propertyType || 'all');
    queryParams.append('minPrice', searchParams.minPrice || '');
    queryParams.append('maxPrice', searchParams.maxPrice || '');
    queryParams.append('location', searchParams.location || '');
    
    console.log("Params>>>>>>>>>>>>>",queryParams)
    const res = await allAdvertsQueryByPage(queryParams.toString());

    if (!res.ok) throw new Error(await res.text());

    const filtered = await res.json();

    console.log("Filtered data received:", filtered);
    setFilteredData(filtered);
  };


  
  return (
    <div className="home-page">
      <SearchForm advertTypeData={advertTypeData} categories={categories} cities={cities} onSearch={handleSearch} />
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

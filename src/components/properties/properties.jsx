'use client';

import React, { useState } from 'react';  // React ve useState hook'unu import ediyor
import './advert-page.scss';  // CSS dosyasını import ediyor
import PropertyCard from '../common/form-fields/properties-cart';  // PropertyCard bileşenini import ediyor
import SearchForm from './properties-arama.jsx';  // SearchForm bileşenini import ediyor

const Properties = ({ data, advertTypeData, categories }) => {  // Properties bileşeni, data ve advertTypeData prop'larını alır
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",categories)
  const [filteredData, setFilteredData] = useState(data);  // filteredData durumunu oluşturur ve başlangıç değeri olarak data'yı kullanır

  const handleSearch = (searchParams) => {  // handleSearch fonksiyonu, arama parametrelerini alır
    console.log('Search Params:', searchParams); // Arama parametrelerini konsola yazdırır (debugging için)

    const filtered = data.filter(property => {  // data dizisini filtreler ve her bir property elemanını kontrol eder
      return (
        (searchParams.query === '' || property.title.toLowerCase().includes(searchParams.query.toLowerCase())) &&  // Query boşsa veya property başlığı arama query'sini içeriyorsa
        (searchParams.propertyStatus === 'All' || property.status === searchParams.propertyStatus) &&  // Property durumu "All" ise veya property'nin durumu arama durumuna eşitse
        (searchParams.propertyType === 'All' || property.type === searchParams.propertyType) &&  // Property türü "All" ise veya property'nin türü arama türüne eşitse
        (searchParams.minPrice === '' || property.price >= parseFloat(searchParams.minPrice)) &&  // Min fiyat boşsa veya property fiyatı minimum fiyata eşit ya da büyükse
        (searchParams.maxPrice === '' || property.price <= parseFloat(searchParams.maxPrice)) &&  // Max fiyat boşsa veya property fiyatı maksimum fiyata eşit ya da küçükse
        (searchParams.location === '' || property.location === searchParams.location)  // Konum boşsa veya property'nin konumu arama konumuna eşitse
      );
    });
    setFilteredData(filtered);  // Filtrelenmiş datayı filteredData durumuna ayarlar
  };

  return (
    <div className="home-page">           
      <SearchForm advertTypeData={advertTypeData}  categories={categories} onSearch={handleSearch} />  
      <div className="properties-grid">  
        {filteredData.length > 0 ? (  // Eğer filteredData'da eleman varsa
          filteredData.map((property, index) => (  // filteredData'yı map'ler ve her bir property için PropertyCard bileşenini render eder
            <PropertyCard
              key={index}  // Her bir PropertyCard bileşeni için benzersiz bir key
              title={property.title}  // Property başlığı
              location={property.location}  // Property konumu
              price={property.price}  // Property fiyatı
              imageUrl={property.imageUrl}  // Property resim URL'si
            />
          ))
        ) : (  // Eğer filteredData boşsa
          <p>No properties found</p>  // "No properties found" mesajını gösterir
        )}
      </div>
    </div>
  );
};

export default Properties;  // Properties bileşenini export eder

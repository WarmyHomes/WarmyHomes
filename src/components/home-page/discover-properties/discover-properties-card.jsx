'use client';
import React from "react";
import "./discover-properties-card.scss";
import PropertyCard from "@/components/common/form-fields/properties-cart";

const DiscoverPropertiesCard = ({ data }) => {
  return (
    <div className="home-page">
      <div className="properties-grid">
        {data.map(property => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            imageData={property}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverPropertiesCard;

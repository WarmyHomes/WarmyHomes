"use client";

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import "./properties-cart.scss"


const PropertyCard = ({ title, location, price, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="property-card">
      <img src={imageUrl} alt={title} className="property-image" />
      <div className="favorite-icon" onClick={toggleFavorite}>
        <FaHeart className={isFavorite ? 'favorite' : ''} />
      </div>
      <div className="property-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <div className="property-footer">
          <span className="property-price">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

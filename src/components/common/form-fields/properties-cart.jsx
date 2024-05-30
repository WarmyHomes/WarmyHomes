import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import "./properties-cart.scss";

const PropertyCard = ({ title, location, price, imageData }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // İlk resmin data'sını kontrol et ve al
  const firstImageData = imageData.images && imageData.images.length > 0 ? imageData.images[0].data : null;

  //console.log("Image Data >>>>>>>", firstImageData);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="property-card">
      <div className="image">
        {firstImageData ? (
          <img
            src={`data:image/jpeg;base64,${firstImageData}`}
            width={400}
            height={300}
            alt={"Property Image"}
            className="rounded"
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
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

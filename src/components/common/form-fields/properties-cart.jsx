import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import "./properties-cart.scss";

const PropertyCard = ({ key, id, title, location, price, imageData }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const firstImageData = imageData.images && imageData.images.length > 0 ? imageData.images[0].data : null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="property-card">
      <div className="image">
        {firstImageData ? (
          <a href={`/adverts/details/${id}`}>
            <img
              src={`data:image/jpeg;base64,${firstImageData}`}
              alt={"Property Image"}
              className="rounded"
            />
          </a>
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="favorite-icon" onClick={toggleFavorite}>
        <FaHeart className={isFavorite ? 'favorite' : ''} />
      </div>
      <div className="property-info">
        <>{key}</>
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

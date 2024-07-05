import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import "./properties-cart.scss";
import { myfvories } from '@/actions/favoris-action';

const PropertyCard = ({ id, title, location, price, imageData, myfavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (myfavorites && myfavorites.length > 0) {
      const isFav = myfavorites.some(favorite => favorite.id === id);
      setIsFavorite(isFav);
    }
  }, [id, myfavorites]);

  const firstImageData = imageData.images && imageData.images.length > 0 ? imageData.images[0].data : null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    favoris(id);
  };

  const favoris = (id) => {
    myfvories(id);
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
        <FaHeart className={isFavorite ? 'favoris red' : 'favoris'} />
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

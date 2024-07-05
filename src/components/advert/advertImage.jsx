import React from 'react';
import { handleImageChange, handleImageSelect, handleUpload } from '../../actions/image-action';
import './style.scss';

const AdvertImage = ({ images, setImages, setFeaturedImage, advertId }) => {
  return (
    <div className="row">
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => handleImageChange(e, images, setImages)} 
        multiple 
      />
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img
              src={image.url}
              alt={`Advert Image ${index}`}
              className={image.selected ? "selected" : ""}
              onClick={() => handleImageSelect(index, images, setImages, setFeaturedImage)}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => handleUpload(advertId, images)}>Resimleri Yükle</button>
    </div>
  );
};

export default AdvertImage;

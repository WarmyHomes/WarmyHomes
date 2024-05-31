import React, { useState } from "react";
import "./style.scss";

const AddNewAdvertImage = ({ images, setImages, setFeaturedImage }) => {
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    const remainingSpace = 5 - images.length;
    if (selectedFiles.length > remainingSpace) {
      alert("You can only upload 5 images");
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const imageUrl = URL.createObjectURL(selectedFiles[i]);
      setImages((prevImages) => [
        ...prevImages,
        { url: imageUrl, selected: false },
      ]);
    }
  };

  const handleImageSelect = (index) => {
    const updatedImages = [...images];
    updatedImages[index].selected = !updatedImages[index].selected;
    setImages(updatedImages);
    if (updatedImages[index].selected) {
      setFeaturedImage(updatedImages[index]);
    } else {
      setFeaturedImage(null);
    }
  };

  return (
    <div className="row">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img
              src={image.url}
              alt={`Advert Image ${index}`}
              className={image.selected ? "selected" : ""}
              onClick={() => handleImageSelect(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddNewAdvertImage;

"use client";

import React, { useState } from 'react';
import "./style.scss";
import { initialResponse } from "@/helpers/form-validation";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { useFormState } from "react-dom";
import { imageYüklemeAction } from '@/actions/image-action';

const NewAdvertImage = ({ advertId }) => {
  // imageYüklemeAction fonksiyonunu advertId ile sarmalayarak yeni bir fonksiyon oluşturun
  const wrappedImageYüklemeAction = (formData) => imageYüklemeAction(advertId, formData);
  
  const [state, dispatch] = useFormState(
    wrappedImageYüklemeAction, 
    initialResponse 
  );

  const [images, setImages] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFiles = event.target.files;
    const remainingSpace = 5 - images.length;
    if (selectedFiles.length > remainingSpace) {
      alert('En fazla 5 resim yükleyebilirsiniz.');
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const imageUrl = URL.createObjectURL(selectedFiles[i]);
      setImages((prevImages) => [
        ...prevImages,
        { file: selectedFiles[i], url: imageUrl, selected: false },
      ]);
    }
  };

  const handleImageSelect = (index) => {
    const updatedImages = [...images];
    updatedImages.forEach((image, idx) => {
      if (index === idx) {
        image.selected = !image.selected;
        setFeaturedImage(image.selected ? image : null);
      } else {
        image.selected = false;
      }
    });
    setImages(updatedImages);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, idx) => idx !== index);
    setImages(updatedImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun otomatik olarak submit olmasını önler

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image.file);
    });

    try {
      const response = await wrappedImageYüklemeAction(formData);
      if (response.success) {
        alert(`Yüklenen Resim ID'leri: ${response.uploadedImageIds.join(', ')}`);
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('Resimler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
         
          {state?.message ? (
            <div className="alert alert-danger">
              {state.message}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="userId" />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-1">
              <div className="col">
                <div className="form-floating mb-3">
                  <div className="invalid-feedback">
                    {state?.errors?.name}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-3">
              <SubmitButton id="button" title="Create" />
            </div>
          </form>

          <div className="image-upload-section">
            <div className="image-upload-header">
              <label htmlFor="imageUpload" className="image-upload-label">
                <span className="plus-icon">+</span>
              </label>
              <input 
                type="file" 
                id="imageUpload" 
                accept="image/*" 
                onChange={handleImageChange} 
                multiple 
              />
            </div>
            <div className="images-preview">
              {images.map((image, index) => (
                <div className="image-wrapper" key={index}>
                  <img
                    src={image.url}
                    alt={`Advert Image ${index}`}
                    className={image.selected ? "selected" : ""}
                    onClick={() => handleImageSelect(index)}
                  />
                  <button className="delete-button" onClick={() => handleDeleteImage(index)}>Delete</button>
                  {image.selected && <div className="featured-label">Featured</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdvertImage;

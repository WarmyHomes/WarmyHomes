import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createNewAdvertAction } from "@/actions/new-advert-action";
import AddNewAdvertImage from "./AddNewAdvertImage";
import { swalAlert } from "@/helpers/swal";
import "./style.scss";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  advertType: Yup.string().required("Advert type is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  neighbourhood: Yup.string().required("Neighbourhood is required"),
  location: Yup.string().required("Location is required"),
  category: Yup.string().required("Category is required"),
  floor: Yup.string().required("Floor is required"),
  bedroom: Yup.string().required("Bedroom is required"),
  bathroom: Yup.string().required("Bathroom is required"),
  garage: Yup.string().required("Garage is required"),
  yearOfBuilt: Yup.string().required("Year of built is required"),
  size: Yup.string().required("Size is required"),
  images: Yup.array()
    .of(Yup.string())
    .min(1, "At least one image is required"),
});

const AddNewAdvertForm = () => {
  const [state, setState] = useState({ success: null, message: "", errors: {} });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [images, setImages] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const formRef = useRef(null);

  const handleSetFeatured = () => {
    const selectedImage = images.find((image) => image.selected);
    if (selectedImage) {
      setFeaturedImage(selectedImage);
    } else {
      swalAlert("Please select an image to set as featured", "warning");
    }
  };

  const handleDeleteSelected = () => {
    const remainingImages = images.filter((image) => !image.selected);
    setImages(remainingImages);
    setFeaturedImage(null);
  };

  const onSubmit = async (data) => {
    try {
      const result = await createNewAdvertAction(data);
      setState(result);
      if (result.success) {
        formRef.current.reset();
        alert(result.message); // veya istediğiniz bildirim türünü kullanabilirsiniz
      } else {
        alert(result.message); // veya istediğiniz bildirim türünü kullanabilirsiniz
      }
    } catch (error) {
      console.error('There was a problem with your createNewAdvertAction:', error);
    }
  };

  return (
    <form
      className="create-advert-form"
      noValidate
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row add-advert-row">
        <div className="header">
          <h2>Common Information</h2>
        </div>
        <div className="col-lg-6 mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              id="title"
              placeholder="Title"
              {...register("title")}
            />
            <label htmlFor="title">Title</label>
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <textarea
              className={`form-control ${errors.description ? "is-invalid" : ""}`}
              placeholder="Description"
              id="description"
              {...register("description")}
            ></textarea>
            <label htmlFor="description">Description</label>
            {errors.description && (
              <div className="invalid-feedback">{errors.description.message}</div>
            )}
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.price ? "is-invalid" : ""}`}
                  id="price"
                  placeholder="Price"
                  {...register("price")}
                />
                <label htmlFor="price">Price</label>
                {errors.price && (
                  <div className="invalid-feedback">{errors.price.message}</div>
                )}
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating mb-3">
                <select
                  className={`form-select ${errors.advertType ? "is-invalid" : ""}`}
                  id="advertType"
                  {...register("advertType")}
                >
                  <option value="">Select Advert Type</option>
                  <option value="3">Activated</option>
                  <option value="1">Pending</option>
                  <option value="2">Rejected</option>
                </select>
                <label htmlFor="advertType">Advert Type</label>
                {errors.advertType && (
                  <div className="invalid-feedback">{errors.advertType.message}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>Address</h2>
        </div>
        <div className="col-lg-6 mt-3">
          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.country ? "is-invalid" : ""}`}
                  id="country"
                  placeholder="Country"
                  {...register("country")}
                />
                <label htmlFor="country">Country</label>
                {errors.country && (
                  <div className="invalid-feedback">{errors.country.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                  id="city"
                  placeholder="City"
                  {...register("city")}
                />
                <label htmlFor="city">City</label>
                {errors.city && (
                  <div className="invalid-feedback">{errors.city.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.neighbourhood ? "is-invalid" : ""}`}
                  id="neighbourhood"
                  placeholder="Neighbourhood"
                  {...register("neighbourhood")}
                />
                <label htmlFor="neighbourhood">Neighbourhood</label>
                {errors.neighbourhood && (
                  <div className="invalid-feedback">{errors.neighbourhood.message}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.location ? "is-invalid" : ""}`}
              id="location"
              placeholder="Location"
              {...register("location")}
            />
            <label htmlFor="location">Location</label>
            {errors.location && (
              <div className="invalid-feedback">{errors.location.message}</div>
            )}
          </div>
        </div>

        <div className="header">
          <h2>Properties</h2>
        </div>
        <div className="col-lg-6 mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.category ? "is-invalid" : ""}`}
              id="category"
              placeholder="Category"
              {...register("category")}
            />
            <label htmlFor="category">Category</label>
            {errors.category && (
              <div className="invalid-feedback">{errors.category.message}</div>
            )}
          </div>

          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.floor ? "is-invalid" : ""}`}
                  id="floor"
                  placeholder="Floor"
                  {...register("floor")}
                />
                <label htmlFor="floor">Floor</label>
                {errors.floor && (
                  <div className="invalid-feedback">{errors.floor.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.bedroom ? "is-invalid" : ""}`}
                  id="bedroom"
                  placeholder="Bedroom"
                  {...register("bedroom")}
                />
                <label htmlFor="bedroom">Bedroom</label>
                {errors.bedroom && (
                  <div className="invalid-feedback">{errors.bedroom.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.bathroom ? "is-invalid" : ""}`}
                  id="bathroom"
                  placeholder="Bathroom"
                  {...register("bathroom")}
                />
                <label htmlFor="bathroom">Bathroom</label>
                {errors.bathroom && (
                  <div className="invalid-feedback">{errors.bathroom.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.garage ? "is-invalid" : ""}`}
                  id="garage"
                  placeholder="Garage"
                  {...register("garage")}
                />
                <label htmlFor="garage">Garage</label>
                {errors.garage && (
                  <div className="invalid-feedback">{errors.garage.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.yearOfBuilt ? "is-invalid" : ""}`}
                  id="yearOfBuilt"
                  placeholder="Year Of Build"
                  {...register("yearOfBuilt")}
                />
                <label htmlFor="yearOfBuilt">Year Of Build</label>
                {errors.yearOfBuilt && (
                  <div className="invalid-feedback">{errors.yearOfBuilt.message}</div>
                )}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.size ? "is-invalid" : ""}`}
                  id="size"
                  placeholder="Size"
                  {...register("size")}
                />
                <label htmlFor="size">Size</label>
                {errors.size && (
                  <div className="invalid-feedback">{errors.size.message}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>Images</h2>
        </div>
        <div className="col-lg-6 mt-3 image-container">
          <AddNewAdvertImage
            images={images}
            setImages={setImages}
            setFeaturedImage={setFeaturedImage}
          />
        </div>
        <div className="col-lg-6 col-sm-3 col-s-1 mt-3 button-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSetFeatured}
          >
            Set As Featured
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDeleteSelected}
          >
            Delete
          </button>
        </div>
        <div className="col-lg-2 mt-3 create-button">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewAdvertForm;

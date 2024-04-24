import { createNewAdvertAction } from "@/actions/new-advert-action";
import { initialResponse } from "@/helpers/form-validation";
import { swalAlert } from "@/helpers/swal";
import { useRef, useState } from "react";
import { useForm } from "react";
import "./style.scss";
import AddNewAdvertImage from "./addNewAdvertImage";

const AddNewAdvertForm = () => {
  const [state, setState] = useState(initialResponse);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleSetFeatured = () => {
    const selectedImage = images.find((image) => image.selected);
    if (selectedImage) {
      setFeaturedImage(selectedImage);
    } else {
      alert("Please select an image to set as featured");
    }
  };

  const handleDeleteSelected = () => {
    const remainingImages = images.filter((image) => !image.selected);
    setImages(remainingImages);
  };

  const formRef = useRef(null);

  if (state && state.message) {
    if (state.success) {
      formRef.current?.reset();
      swalAlert(state.message, "success");
    } else {
      swalAlert(state.message, "error");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const result = await createNewAdvertAction(null, formData);
    setState(result);
    if (result.success) {
      formRef.current.reset();
      swalAlert(result.message, "success");
    } else {
      swalAlert(result.message, "error");
    }
  };

  return (
    <form
      className="create-advert-form"
      noValidate
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="row add-advert-row ">
        <div className="header">
          <h2>Common Information</h2>
        </div>
        <div className="col-lg-6  mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
              name="title"
            />
            <label htmlFor="floatingInput" className="form-label">
              Title
            </label>
          </div>
          <div className="invalid-feedback">{state && state.errors?.title}</div>

          <div className="col-lg-12 mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea"
                name="description"
              ></textarea>
              <label htmlFor="floatingTextarea">description</label>
            </div>
            <div className="invalid-feedback">
              {state && state.errors?.description}
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Price"
                  name="price"
                />
                <label htmlFor="floatingInputGrid">Price</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.price ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select mb-3"
                  id="floatingSelectGrid"
                  name="advertType"
                >
                  <option value="">select advert Type</option>
                  <option value="3">Activated</option>
                  <option value="1">Pending</option>
                  <option value="2">Rejected</option>
                </select>
                <label htmlFor="floatingSelectGrid">Advert Type</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.advertType ? "is-invalid" : ""}
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>Address </h2>
        </div>
        <div className="col-lg-6 mt-3">
        <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="country"
                  name="country"
                />
                <label htmlFor="floatingSelectGrid">Country</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.country ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="city"
                  name="city"
                />
                <label htmlFor="floatingSelectGrid">city</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.city}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="neighbourhood"
                  name="neighbourhood"
                />
                <label htmlFor="floatingSelectGrid">neighbourhood</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.size}
              </div>
            </div>
          </div>













          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Location"
              name="location"
            />
            <label htmlFor="floatingInput">Location</label>
          </div>
          <div className="invalid-feedback">
            {state && state.errors?.location ? "is-invalid" : ""}
          </div>
        </div>

        <div className="header">
          <h2>Properties</h2>
        </div>
        <div className="col-lg-6 mt-3">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Category"
              id="floatingTextarea"
              name="category"
            ></textarea>
            <label htmlFor="floatingTextarea">Category</label>
            <div className="invalid-feedback">
              {state && state.errors?.category ? "is-invalid" : ""}
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Floor"
                  name="floor"
                />
                <label htmlFor="floatingSelectGrid">Floor</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.floor ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Bedroom"
                  name="bedroom"
                />
                <label htmlFor="floatingSelectGrid">Bedroom</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.bedroom ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Bathroom"
                  name="bathroom"
                />
                <label htmlFor="floatingSelectGrid">Bathroom</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.bathroom ? "is-invalid" : ""}
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Garage"
                  name="garage"
                />
                <label htmlFor="floatingSelectGrid">Garage</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.garage ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Year Of Build"
                  name="yearOfBuilt"
                />
                <label htmlFor="floatingSelectGrid">Year Of Build</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.yearOfBuilt}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Size"
                  name="size"
                />
                <label htmlFor="floatingSelectGrid">Size</label>
              </div>
              <div className="invalid-feedback">
                {state && state.errors?.size}
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>Images</h2>
        </div>

       
        <div className="col-lg-6 col-sm-3 col-s-1 mt-3 button-container">
          <button className="btn btn-primary" onClick={handleSetFeatured}>
            Set As Featured
          </button>
          <button className="btn btn-primary" onClick={handleDeleteSelected}>
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

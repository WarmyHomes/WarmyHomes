"use client";
import "./style.scss";
import { createNewAdvertAction } from "@/actions/new-advert-action";
import { initialResponse } from "@/helpers/form-validation";
import { swalAlert } from "@/helpers/swal";
import { useRef, useState } from "react";
import { useForm} from "react";


const AddNewAdvert = () => {
  const [state, dispatch] = useState(createNewAdvertAction, initialResponse);
    
  const formRef = useRef(null);

  if (state.message) {
    if (state.success) {
      formRef.current.reset();
      swalAlert(state.message, "success");
    } else {
      swalAlert(state.message, "error");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <form
      className="create-advert-form"
      noValidate
      action={dispatch}
      ref={formRef}
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
            />
            <label for="floatingInput" className="form-label">
              Title
            </label>
          </div>
          <div className="invalid-feedback">{state.errors?.title}</div>

          <div className="col-lg-12 mb-3">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Description"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">description</label>
            </div>
            <div className="invalid-feedback">{state.errors?.description}</div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="Price"
                />
                <label for="floatingInputGrid">Price</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.price ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating">
                <select className="form-select mb-3" id="floatingSelectGrid">
                  <option selected>Activated</option>
                  <option value="1">Pending</option>
                  <option value="2">Rejected</option>
                </select>
                <label for="floatingSelectGrid">Advert Type</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.advertType ? "is-invalid" : ""}
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
                <select className="form-select" id="floatingSelectGrid">
                  <option selected>Advert Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">Country</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.country ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectGrid">
                  <option selected>Advert Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">City</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.city ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectGrid">
                  <option selected>Advert Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">Neighbourhood</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.neighbourhood ? "is-invalid" : ""}
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Location</label>
          </div>
          <div className="invalid-feedback">
            {state.errors?.location ? "is-invalid" : ""}
          </div>
        </div>

        <div className="header">
          <h2>Properties</h2>
        </div>
        <div className="col-lg-6 mt-3">
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Category</label>
            <div className="invalid-feedback">
              {state.errors?.category ? "is-invalid" : ""}
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Floor</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.floor ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Bedroom</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.bedroom ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Bathroom</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.bathroom ? "is-invalid" : ""}
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Garage</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.garage ? "is-invalid" : ""}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Year Of Build</label>
              </div>
              <div className="invalid-feedback">
                {state.errors?.yearOfBuilt}
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingSelectGrid">Size</label>
              </div>
              <div className="invalid-feedback">{state.errors?.size}</div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>Images</h2>
        </div>

        <div className="col-lg-6 mt-3 image-container">
          <div className="row">
            <ul>
              <li>
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-3 col-s-1 mt-3 button-container">
          <button className="btn btn-primary">set As featured</button>
          <button className="btn btn-primary">delete</button>
        </div>
        <div className="col-lg-2 mt-3 create-button">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >Create</button>
        </div>
      </div>
    </form>
  );
};

export default AddNewAdvert;

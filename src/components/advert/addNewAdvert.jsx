import React from "react";
import "./style.scss";

const AddNewAdvert = () => {
  return (
    <>
      <div className="row add-advert-row">
        <h2>common</h2>
        <div className="col-lg-6 mt-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Title</label>
          </div>

          <div className="col-lg-12 mb-3">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">description</label>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                />
                <label for="floatingInputGrid">Email address</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectGrid">
                  <option selected>Advert Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">Advert Type</label>
              </div>
            </div>
          </div>
        </div>

        <h2>address Information</h2>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Title</label>
          </div>
        </div>

        <h2>Properties</h2>
        <div className="col-lg-6 mt-3">
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">description</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
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
                <label for="floatingSelectGrid">Advert Type</label>
              </div>
            </div>
          </div>
        </div>

        <h2>Images</h2>

        <div className="col-lg-6">
          <div className="form-floating ">
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div className="form-floating mb-3">
            <button className="btn btn-danger  ">set as featured</button>
            <button className="btn btn-danger m-3">set as featured</button>
          </div>
          <button className="btn btn-danger px-5 py-3"> create</button>
        </div>
        
      </div>
    </>
  );
};

export default AddNewAdvert;

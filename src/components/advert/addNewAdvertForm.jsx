"use client";

import React from "react";
import { createNewAdvertAction } from "@/actions/new-advert-action";
import "./style.scss";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import SubmitButton from "../common/submit-button/submit-button";
import Link from "next/link";

const AddNewAdvertForm = ({ advert_type, country, city, districts }) => {
  const [state, dispatch] = useFormState(createNewAdvertAction, initialResponse);

  // Dizi olmadıklarını varsayarsak, onları diziye dönüştürelim
  const countryList = Array.isArray(country) ? country : country.object;
  const cityList = Array.isArray(city) ? city : city.object;
  const districtList = Array.isArray(districts) ? districts : districts.object;

  return (
    <div className="container register-form">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form action={dispatch} noValidate>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(state.errors?.title)}`}
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                  <label htmlFor="title">Title</label>
                  <div className="invalid-feedback">
                    {state.errors?.title}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(state.errors?.description)}`}
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                  <label htmlFor="description">Description</label>
                  <div className="invalid-feedback">
                    {state.errors?.description}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(state.errors?.price)}`}
                    id="price"
                    name="price"
                    placeholder="Price"
                  />
                  <label htmlFor="price">Price</label>
                  <div className="invalid-feedback">
                    {state.errors?.price}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <select
                    className={`form-control ${isInvalid(state.errors?.advert_type_id)}`}
                    id="advert_type_id"
                    name="advert_type_id"
                  >
                    <option value=""></option>
                    {advert_type.slice(0, 10).map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="advert_type_id">Advert Type</label>
                  <div className="invalid-feedback">
                    {state.errors?.advert_type_id}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <select
                    className={`form-control ${isInvalid(state.errors?.country_id)}`}
                    id="country_id"
                    name="country_id"
                  >
                    <option value=""></option>
                    {countryList.slice(0, 10).map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="country_id">Country</label>
                  <div className="invalid-feedback">
                    {state.errors?.country_id}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <select
                    className={`form-control ${isInvalid(state.errors?.city_id)}`}
                    id="city_id"
                    name="city_id"
                  >
                    <option value=""></option>
                    {cityList.slice(0, 10).map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="city_id">City</label>
                  <div className="invalid-feedback">
                    {state.errors?.city_id}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <select
                    className={`form-control ${isInvalid(state.errors?.district)}`}
                    id="district"
                    name="district"
                  >
                    <option value=""></option>
                    {districtList.slice(0, 10).map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="district">District</label>
                  <div className="invalid-feedback">
                    {state.errors?.district}
                  </div>
                </div>

                <div>
                  <SubmitButton title="kayıt" />
                  <h6>
                    <Link href="/">Login now!</Link>{" "}
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdvertForm;

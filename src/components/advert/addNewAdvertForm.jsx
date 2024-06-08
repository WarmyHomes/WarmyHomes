"use client";

import React, { useState, useEffect, useReducer } from "react";
import { createNewAdvertAction } from "@/actions/new-advert-action";
import "./style.scss";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import SubmitButton from "../common/submit-button/submit-button";


// Reducer fonksiyonu
const formReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case "setErrors":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

const AddNewAdvertForm = ({ advert_type, country, city, districts, categories }) => {
  const [state, dispatch] = useReducer(formReducer, initialResponse);

  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState([]);

  // Ülke değiştiğinde şehirleri filtrele
  useEffect(() => {
    const selectedCountryId = state.country_id;
    if (selectedCountryId) {
      const filtered = city.object.filter(city => city.country_id === parseInt(selectedCountryId));
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [state.country_id, city]);

  // Şehir değiştiğinde ilçeleri filtrele
  useEffect(() => {
    const selectedCityId = state.city_id;
    if (selectedCityId) {
      const filtered = districts.object.filter(district => district.city_id === parseInt(selectedCityId));
      setFilteredDistricts(filtered);
    } else {
      setFilteredDistricts([]);
    }
  }, [state.city_id, districts]);

  // Kategori değiştiğinde category_property_keys inputlarını güncelle
  useEffect(() => {
    const selectedCategoryId = state.category_id;
    if (selectedCategoryId) {
      const selectedCategory = categories.content.find(category => category.id === parseInt(selectedCategoryId));
      setSelectedCategoryKeys(selectedCategory?.category_property_keys || []);
    } else {
      setSelectedCategoryKeys([]);
    }
  }, [state.category_id, categories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createNewAdvertAction(state);
    if (response.errors) {
      dispatch({ type: "setErrors", payload: response.errors });
    }
  };

  return (
    <div className="container register-form">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate>

                
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(state.errors?.title)}`}
                    id="title"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => dispatch({ type: "field", fieldName: "title", payload: e.target.value })}
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "description", payload: e.target.value })}
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "price", payload: e.target.value })}
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "advert_type_id", payload: e.target.value })}
                  >
                    <option value=""></option>
                    {advert_type.map((type) => (
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "country_id", payload: e.target.value })}
                  >
                    <option value=""></option>
                    {country.object.map((type) => (
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "city_id", payload: e.target.value })}
                  >
                    <option value=""></option>
                    {filteredCities.map((type) => (
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
                    onChange={(e) => dispatch({ type: "field", fieldName: "district", payload: e.target.value })}
                  >
                    <option value=""></option>
                    {filteredDistricts.map((type) => (
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

                <div className="form-floating mb-3">
                  <select
                    className={`form-control ${isInvalid(state.errors?.category_id)}`}
                    id="category_id"
                    name="category_id"
                    onChange={(e) => dispatch({ type: "field", fieldName: "category_id", payload: e.target.value })}
                  >
                    <option value=""></option>
                    {categories.content.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="category_id">Category</label>
                  <div className="invalid-feedback">
                    {state.errors?.category_id}
                  </div>
                </div>

                {selectedCategoryKeys.map((key, index) => (
                  <div className="form-floating mb-3" key={index}>
                    <input
                      type="text"
                      className={`form-control ${isInvalid(state.errors?.[`category_key_${key.id}`])}`}
                      id={`category_key_${key.id}`}
                      name={`category_key_${key.id}`}
                      placeholder={key.name}
                      onChange={(e) => dispatch({ type: "field", fieldName: `category_key_${key.id}`, payload: e.target.value })}
                    />
                    <label htmlFor={`category_key_${key.id}`}>{key.name}</label>
                    <div className="invalid-feedback">
                      {state.errors?.[`category_key_${key.id}`]}
                    </div>
                  </div>
                ))}

               

                <div>
                  <SubmitButton title="Kayit" />
                  
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

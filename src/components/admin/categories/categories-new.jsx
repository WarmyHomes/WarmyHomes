"use client";

import React, { useState } from "react";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { createCategoriesAction } from "@/actions/categories-action";
import { AiOutlineDelete, AiFillCar, AiFillHome } from "react-icons/ai";
import "./categories-new.scss";

// Özel hook'un doğru içe aktarımı
import { useFormState } from "react-dom";
import { TfiCar, TfiHome } from "react-icons/tfi";

const iconOptions = [
  { name: "Car", component: <TfiCar />, value: "AiFillCar" },
  { name: "Home", component: <TfiHome />, value: "AiFillHome" },
];

const CategoriesNew = () => {
  const [state, dispatch] = useFormState(
    createCategoriesAction, // Form gönderme işlemlerini yapan eylem (action)
    initialResponse // Form durumunun başlangıç değeri
  );

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(iconOptions[0].value);
  const [seq, setSeq] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [newProperty, setNewProperty] = useState("");
  const [properties, setProperties] = useState(["Bedroom", "Bathroom"]);

  const handleAddProperty = () => {
    if (newProperty.trim() !== "") {
      setProperties([...properties, newProperty]);
      setNewProperty("");
    }
  };

  const handleDeleteProperty = (property) => {
    setProperties(properties.filter((p) => p !== property));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("icon", icon);
    formData.append("seq", seq);
    formData.append("is_active", isActive);
    formData.append(
      "category_property_keys",
      JSON.stringify(properties.map((property) => ({ name: property })))
    );

    await dispatch(formData);
  };

  return (
    <div className="new-categories-form-container">
      <form className="new-categories-form" onSubmit={handleSubmit}>
        <div className="new-categories-form-left">
          <div className="single-form-item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className={`${isInvalid(state.errors?.title)}`}
              id="title"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="invalid-feedback">{state.errors?.title}</div>
          </div>

          <div className="side-by-side-inputs">
            <div className="single-form-item">
              <label htmlFor="icon">Icon</label>
              <select
                id="icon"
                name="icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              >
                {iconOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="icon-preview">
                {iconOptions.find((option) => option.value === icon)?.component}
              </div>
              <div className="invalid-feedback">{state.errors?.icon}</div>
            </div>

            <div className="single-form-item">
              <label htmlFor="seq">Sequence</label>
              <input
                type="number"
                className={`${isInvalid(state.errors?.seq)}`}
                id="seq"
                name="seq"
                placeholder="Sequence"
                value={seq}
                onChange={(e) => setSeq(e.target.value)}
              />
              <div className="invalid-feedback">{state.errors?.seq}</div>
            </div>

            <div className="single-form-item">
              <label htmlFor="is_active">Status</label>
              <div className="status-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
                <label htmlFor="is_active">
                  {isActive ? "Active" : "Inactive"}
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
            <CancelButton id="button-cancel" title="Cancel" />
            <SubmitButton id="button-submit" title="Create" onClick={handleSubmit} />
          </div>
        </div>
        <div className="new-categories-form-right">
          <div className="properties-container">
            <h4>Properties</h4>
            <div className="property-input">
              <input
                type="text"
                value={newProperty}
                onChange={(e) => setNewProperty(e.target.value)}
              />
              <button type="button" onClick={handleAddProperty}>
                +
              </button>
            </div>
            <ul>
              {properties.map((property, index) => (
                <li key={index}>
                  {property}
                  <AiOutlineDelete
                    className="delete-icon"
                    type="button"
                    onClick={() => handleDeleteProperty(property)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoriesNew;

"use client";

import React, { useState } from "react";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import { updateCategoriesAction } from "@/actions/categories-action";
import "./categories-new.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { TfiCar, TfiHome } from "react-icons/tfi";
import { FaBed, FaBuilding, FaChurch, FaCity, FaHospital, FaHotel, FaParking, FaSchool, FaTree, FaWarehouse } from "react-icons/fa";
import { BsBank, BsShop } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdOutlineCabin, MdRestaurant } from "react-icons/md";
// Icon options
const iconOptions = [
  { name: "Car", component: <TfiCar />, value: "TfiCar" },
  { name: "Home", component: <TfiHome />, value: "TfiHome" },
  { name: "Building", component: <FaBuilding />, value: "FaBuilding" },
  { name: "Tree", component: <FaTree />, value: "FaTree" },
  { name: "Shop", component: <BsShop />, value: "BsShop" },
  { name: "Office", component: <HiBuildingOffice />, value: "HiBuildingOffice" },
  { name: "Hotel", component: <FaHotel />, value: "FaHotel" },
  { name: "Warehouse", component: <FaWarehouse />, value: "FaWarehouse" },
  { name: "Cabin", component: <MdOutlineCabin />, value: "MdOutlineCabin" },
  { name: "City", component: <FaCity />, value: "FaCity" },
  { name: "Bank", component: <BsBank />, value: "BsBank" },
  { name: "Hospital", component: <FaHospital />, value: "FaHospital" },
  { name: "School", component: <FaSchool />, value: "FaSchool" },
  { name: "Church", component: <FaChurch />, value: "FaChurch" },
  { name: "Bed", component: <FaBed />, value: "FaBed" },
  { name: "Restaurant", component: <MdRestaurant />, value: "MdRestaurant" },
  { name: "Parking", component: <FaParking />, value: "FaParking" },
];

const CategoriesEdit = ({ data }) => {
  const [state, dispatch] = useFormState(
    updateCategoriesAction,
    initialResponse
  );

  const [id, setId] = useState(data.id);
  const [title, setTitle] = useState(data.title);
  const [icon, setIcon] = useState(data.icon);
  const [seq, setSeq] = useState(data.seq);
  const [isActive, setIsActive] = useState(data.isActive);
  const [newProperty, setNewProperty] = useState("");
  const [properties, setProperties] = useState(
    data.category_property_keys.map((item) => item.name)
  );

  const handleAddProperty = () => {
    if (newProperty.trim() !== "") {
      setProperties([...properties, newProperty]);
      setNewProperty("");
    }
  };

  const handleDeleteProperty = (property) => {
    setProperties(properties.filter((p) => p !== property));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("icon", icon);
    formData.append("seq", seq);
    formData.append("is_active", isActive);
    formData.append(
      "category_property_keys",
      JSON.stringify(properties.map((property) => ({ name: property })))
    );

    dispatch(formData);
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
                    {
                      iconOptions.find((option) => option.value === icon)?.component || <></>
                    }
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
                <SubmitButton
                  id="button-submit"
                  title="Save"
                  onClick={handleSubmit}
                />
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

export default CategoriesEdit;

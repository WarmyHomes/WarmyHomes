"use client";

import React, { useState } from "react";
import "./index.scss";
import { RiSearch2Line } from "react-icons/ri";

const HeroSection = () => {
  const categories = [
    {
      label: "House",
      value: "House",
    },
    {
      label: "Apartment",
      value: "Apartment",
    },
    {
      label: "Villa",
      value: "Villa",
    },
    {
      label: "Office",
      value: "Office",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="hero-section-main-container">
      <div className="hero-section-left-side">
        <h1>Easy Way to Find a Perfect Property</h1>
        <div className="hero-section-search-container">
          <div className="type-buttons-container">
            <button>Rent</button> <hr /> <button>Sale</button>
          </div>
          <div className="search-input-container">
            <input type="text" placeholder="Search" />
            <div className="search-icon-container">
              <RiSearch2Line className="icon" />
            </div>
          </div>
          <div className="categories-container">
            {categories.map((el) => (
              <div
                onClick={() => setSelectedCategory(el?.value)}
                className="single-category"
              >
                <div
                  className={
                    selectedCategory == el?.value ? "dot selected" : "dot"
                  }
                />
                <h6>{el?.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-section-right-side">
        <img src="./images/herosection/herosection.png" />
      </div>
    </div>
  );
};

export default HeroSection;

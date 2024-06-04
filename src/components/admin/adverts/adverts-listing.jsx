import React from "react";
import "./adverts-listing.scss";
import PropertyCard from "./property-card";

const AdvertsListing = () => {
  const properties = [
    {
      images: ["/images/highlight.png"],
      title: "Apartamento en la ciudad de México",
      location: "Ciudad de México, CDMX",
      cityName: "Sp,etjomg",
      countryName: "Turkiye",
      price: "1200.00",
      category: "Villa",
      type: "For Sale",
      createdAt: "03/04/2023",
      is_active: true,
      view_count: 30,
    },
    {
      images: ["/images/highlight.png"],
      title: "Equestrian Family Home",
      location: "Ciudad de México, CDMX",
      cityName: "Sp,etjomg",
      countryName: "Turkiye",
      price: "1200.00",
      category: "House",
      type: "For Rent",
      is_active: false,
      view_count: 30,
      createdAt: "03/04/2023",
    },
    {
      images: ["/images/highlight.png"],
      title: "Apartamento en la ciudad de México",
      location: "Ciudad de México, CDMX",
      cityName: "Sp,etjomg",
      countryName: "Turkiye",
      price: "1200.00",
      category: "Villa",
      type: "For Sale",
      is_active: true,
      view_count: 30,
      createdAt: "03/04/2023",
    },
  ];

  return (
    <div className="all-properties-main-container">
      <div className="properties-header">
        <h5 className="property-header">Property</h5>
        <h5>Date Published</h5>
        <h5>Status</h5>
        <h5>View/Like/Tour</h5>
        <h5>Action</h5>
      </div>
      <div className="all-properties-listing">
        {properties.map((el, index) => (
          <PropertyCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdvertsListing;

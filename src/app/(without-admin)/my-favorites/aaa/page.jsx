import React from "react";
import "./page.scss";
import PageHeader from "@/components/common/page-header";
import PropertyCard from "@/components/common/property-card";

const MyFavoritesss = () => {
  const properties = [
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      category: "Villa",
      type: "For Sale",
    },
    {
      img: "/images/highlight.png",
      name: "Equestrian Family Home",
      address: "California City, CA, USA",
      price: "2200.00",
      category: "House",
      type: "For Rent",
    },
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      category: "Villa",
      type: "For Sale",
    },
  ];
  return (
    <div className="my-favorites-page-container">
      <PageHeader title={"My Favorites"} />
      <div className="all-properties-main-container">
        <div className="properties-header">
          <h5 className="property-header">Property</h5>
          <h5>Category</h5>
          <h5>Type</h5>
          <h5>Action</h5>
        </div>
        <div className="all-properties-listing">
          {properties.map((el, index) => (
            <PropertyCard data={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;

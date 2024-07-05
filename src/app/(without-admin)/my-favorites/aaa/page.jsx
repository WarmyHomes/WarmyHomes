import React from "react";
import "./page.scss";
import PageHeader from "@/components/common/page-header";
import PropertyCard from "@/components/common/property-card";

const MyFavoritesss = ({ data }) => {
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
          {data && data.length > 0 ? (
            data.map((el, index) => (
              <PropertyCard data={el} key={index} />
            ))
          ) : (
            <p>No favorite properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavoritesss;

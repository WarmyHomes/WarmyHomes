import React from "react";
import MyAdvertCard from "../common/property-card copy";

const MyAdvertsListing = ({ data }) => {
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
        {data?.content.length
          ? data?.content?.map((el, index) => (
              <MyAdvertCard data={el} key={index} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MyAdvertsListing;

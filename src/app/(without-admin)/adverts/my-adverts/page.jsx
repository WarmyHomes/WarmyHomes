import React from "react";
import "./page.scss";
import PageHeader from "@/components/common/page-header";
import MyAdvertCard from "@/components/common/property-card copy";

const MyAdverts = () => {
  const properties = [
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
    {
      img: "/images/highlight.png",
      name: "Equestrian Family Home",
      address: "California City, CA, USA",
      price: "2200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
  ];
  return (
    <div className="my-favorites-page-container">
      <PageHeader title={"My Adverts"} />
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
            <MyAdvertCard data={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAdverts;

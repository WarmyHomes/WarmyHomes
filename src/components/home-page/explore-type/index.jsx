import React from "react";
import "./index.scss";

const ExploreByTypes = () => {
  const cards = [
    {
      icon: "/icons/house.svg",
      heading: "Houses",
      descripton: "33 Properties",
    },
    {
      icon: "/icons/apartment.svg",
      heading: "Apartments",
      descripton: "21 Properties",
    },
    {
      icon: "/icons/office.svg",
      heading: "Offices",
      descripton: "15 Properties",
    },
    {
      icon: "/icons/villa.svg",
      heading: "Villas",
      descripton: "43 Properties",
    },
    {
      icon: "/icons/bungalow.svg",
      heading: "Bungalows",
      descripton: "10 Properties",
    },
  ];

  return (
    <div className="explore-properties-by-type-container">
      <h2 className="heading">Explore Properties</h2>
      <p className="tagline">By Types</p>
      <div className="properties-type-cards-container">
        {cards.map((el) => (
          <div className="single-property-type-card">
            <div className="icon-container">
              <img src={el.icon} alt="hosue image" />
            </div>
            <div className="content-container">
              <h5>{el.heading}</h5>
              <p>{el.descripton}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByTypes;

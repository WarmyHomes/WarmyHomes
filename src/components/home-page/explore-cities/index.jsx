import React from "react";
import "./index.scss";

const ExploreByCities = () => {
  const cards = [
    {
      heading: "Istanbul",
      descripton: "330 Properties",
    },
    {
      heading: "Izmir",
      descripton: "421 Properties",
    },
    {
      heading: "Antalya",
      descripton: "115 Properties",
    },
    {
      heading: "Bursa",
      descripton: "243 Properties",
    },
    {
      heading: "Ankara",
      descripton: "310 Properties",
    },
  ];

  return (
    <div className="explore-properties-by-cities-container">
      <h2 className="heading">Explore Properties</h2>
      <p className="tagline">By Cities</p>
      <div className="properties-cities-cards-container">
        {cards.map((el) => (
          <div className="single-property-cities-card">
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

export default ExploreByCities;

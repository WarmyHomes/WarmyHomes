import React from "react";
import "./index.scss";
import { getAdvertsDependingOnCities } from "@/services/count-cities";

const ExploreByCities = async() => {
 
    const res = await getAdvertsDependingOnCities();
   
    const data = await res.json();
   


  return (
    <div className="explore-properties-by-cities-container">
      <h2 className="heading">Explore Properties</h2>
      <p className="tagline">By Cities</p>
      <div className="properties-cities-cards-container">
        {data.map((el) => (
          <div className="single-property-cities-card">
            <div className="content-container">
            <a href={`/properties`}>
              <h5>{el.city}</h5>
              <p>{el.amount}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByCities;

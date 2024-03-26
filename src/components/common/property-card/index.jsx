import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

import "./index.scss";

const PropertyCard = ({ data }) => {
  return (
    <div className="property-card-main-container">
      <div className="property-column-container">
        <div className="left">
          <img src={data.img} />
        </div>
        <div className="right">
          <h5>{data.name}</h5>
          <p>{data.address}</p>
          <p>${data.price}</p>
        </div>
      </div>
      <div className="column">{data.category}</div>
      <div className="column">{data.type}</div>
      <div className="column">
        <AiOutlineDelete className="delete-icon" />
      </div>
    </div>
  );
};

export default PropertyCard;

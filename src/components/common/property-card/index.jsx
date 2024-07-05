import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

import "./index.scss";
import DataTable, { Column } from "../table";
import MyFavoritesToolbar from "@/components/my-favorites/my-favorites-toolbar";

const PropertyCard = ({ data }) => {

  const firstImageData = data.images && data.images.length > 0 ? data.images[0].data : null;

  return (
    <div className="property-card-main-container">
      <div className="property-column-container">
        <div className="left">
          {data.images && data.images.length > 0 ? (
            <img 
            src={`data:image/jpeg;base64,${firstImageData}`}
            alt={"Property Image"}
            className="rounded"
            />
          ) : (
            <p>No Image Available</p>
          )}
        </div>
        <div className="right">
          <h5>{data.title}</h5>
          <p>{data.location}</p>
          <p>${data.price}</p>
        </div>
      </div>
      <div className="column">{data.country_id}</div>
      <div className="column">{data.advert_type_id}</div>
      <div className="column">
      <AiOutlineDelete className="delete-icon" />
      </div>
    </div>
  );
};

export default PropertyCard;

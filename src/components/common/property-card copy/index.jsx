import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import "./index.scss";

const MyAdvertCard = ({ data }) => {
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
      <div className="column">{data.publishDate}</div>
      <div className="column">
        <p className="status-column">{data.status}</p>
      </div>
      <div className="column">
        <div className="like-actions">
          <div className="single-interaction-item">
            <IoEyeOutline />
            <span>{data.views}</span>
          </div>
          <div className="single-interaction-item">
            <IoIosHeartEmpty />
            <span>{data.likes}</span>
          </div>
          <div className="single-interaction-item">
            <IoLocationOutline />
            <span>{data.pins}</span>
          </div>
        </div>
      </div>
      <div className="column">
        <FiEdit2 className="edit-icon" />
      </div>
    </div>
  );
};

export default MyAdvertCard;

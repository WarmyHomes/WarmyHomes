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
          <img src={data?.images?.[0]} />
        </div>
        <div className="right">
          <h5>{data?.title}</h5>
          <p>{`${data?.location} ${data?.cityName}, ${data?.countryName}`}</p>
          <p>${data.price}</p>
        </div>
      </div>
      <div className="column">{new Date(data?.createdAt).toLocaleDateString()}</div>
      <div className="column">
        <p className="status-column">{data?.is_active?'Active':'Pending'}</p>
      </div>
      <div className="column">
        <div className="like-actions">
          <div className="single-interaction-item">
            <IoEyeOutline />
            <span>{data?.view_count || 0}</span>
          </div>
          <div className="single-interaction-item">
            <IoIosHeartEmpty />
            <span>{data?.view_count || 0}</span>
          </div>
          <div className="single-interaction-item">
            <IoLocationOutline />
            <span>{data?.view_count || 0}</span>
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

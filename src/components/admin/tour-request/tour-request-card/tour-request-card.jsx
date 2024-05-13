"use client";
import React from "react";
import "./style.scss";
import { RiEdit2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
const TourRequestCard = ({
  image,
  title,
  country,
  city,
  district,
  owner,
  guest,
  status,
  tourRequestDate,
  tourRequestTime,
}) => {
  return (
    <div className="card mt-2 col-md-11">
      <div className="card-body ">
        <div className="row justify-content-evenly  ">
          <div className="col-md-1  text-center">
            <img
              src="https://static.wixstatic.com/media/2eabaa_79c59a8497a941249a043e2795145dc0~mv2.jpg/v1/fit/w_564%2Ch_705%2Cal_c%2Cq_80,enc_auto/file.jpg"
              alt="property-img"
              className="property-image ms-2"
            />
          </div>
          <div className="col-md-2 mt-4 property-desc ">
            <div className="title">title</div>
            <div className="address">country-city-district</div>
            <div className="price">$price</div>
          </div>
          <div className="col-md-1 mt-5 text-center">Owner</div>
          <div className="col-md-1 mt-5 text-center">Guest</div>
          <div className="col-md-1 mt-5 text-center">Status</div>
          <div className="col-md-1 mt-5 text-center">Tour Date</div>
          <div className="col-md-1 mt-5 text-center">Tour Time</div>
          <div className="col-md-1 mt-5 text-center">
            <div className="icon-container text-center">
              <BsTrash />
              <RiEdit2Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourRequestCard;

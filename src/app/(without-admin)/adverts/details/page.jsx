import React from "react";
import "./page.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgTag } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const AdvertsDetailsPage = () => {
  return (
    <div className="adverts-details-page-container">
      <div className="advert-detail-page-header">
        <div className="advert-detail-header-left">
          <h2>Luxuries Villa in Central Park</h2>
          <div className="all-attributes-container">
            <div className="single-item">
              <MdOutlineLocationOn className="item-icon" />
              <p>Istanbul, Pendik</p>
            </div>
            <div className="single-item">
              <CgTag className="item-icon" />
              <p>For sale</p>
            </div>
            <div className="single-item">
              <FaRegClock className="item-icon" />
              <p>2 weeks ago</p>
            </div>
            <div className="single-item">
              <FaRegEye className="item-icon" />
              <p>1252</p>
            </div>
          </div>
        </div>
        <div className="advert-detail-header-right">
          <h1>$1500.00</h1>
        </div>
      </div>
    </div>
  );
};

export default AdvertsDetailsPage;

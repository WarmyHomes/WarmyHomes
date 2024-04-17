"use client";

import React, { useState } from "react";
import "./page.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgTag } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import GoogleMapComponent from "@/components/common/misc/service-components/GoogleMapComponent";

const AdvertsDetailsPage = () => {
  const images = [
    "/images/about.png",
    "/images/highlight.png",
    "/images/selling-option.png",
    "/images/about.png",
  ];

  const [active, setActive] = useState(images[0]);

  const onImageClick = (el) => {
    setActive(el);
  };

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
      <div className="advert-detail-page-main">
        <div className="advert-detail-page-main-left">
          <div className="image-schowcase-container">
            <img src={active} alt="" className="main-image" />
            <div className="images-container">
              {images.map((el) => (
                <img
                  onClick={() => onImageClick(el)}
                  src={el}
                  alt=""
                  className="main-image"
                />
              ))}
            </div>
          </div>
          <div className="description-container">
            <h5>Description</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="details-container">
            <h5>Details</h5>
            <div className="side-by-side-main">
              <div className="details-left-container">
                <div className="single-detail-item">
                  <h6>Size</h6>
                  <p>120m2</p>
                </div>
                <div className="single-detail-item">
                  <h6>Bathrooms</h6>
                  <p>2</p>
                </div>
                <div className="single-detail-item">
                  <h6>Bedrooms</h6>
                  <p>4</p>
                </div>
                <div className="single-detail-item">
                  <h6>Garage</h6>
                  <p>1</p>
                </div>
              </div>
              <div className="details-right-container">
                <div className="single-detail-item">
                  <h6>Year of built</h6>
                  <p>2022</p>
                </div>
                <div className="single-detail-item">
                  <h6>Furniture</h6>
                  <p>Yes</p>
                </div>
                <div className="single-detail-item">
                  <h6>Maintenance fee</h6>
                  <p>$80</p>
                </div>
                <div className="single-detail-item">
                  <h6>Terrace</h6>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location-details-container">
            <h5>Location</h5>
            <div className="location-details">
              <p>Country: Turkey</p>
              <p>City: Istanbul</p>
              <p>District: Eyup</p>
            </div>
            <GoogleMapComponent
              styleOptions={{
                width: "100%",
                height: "50vh",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "40px",
              }}
            />
          </div>
        </div>
        <div className="advert-detail-page-main-right">
          <div className="schedule-form-container">
            <h4>Schedule a tour</h4>
            <p>Choose your preferred day</p>

            <form>
              <input
                type="date"
                placeholder="Tour date"
                name="date"
                id="date"
              />
              <input
                type="time"
                placeholder="Tour time"
                name="time"
                id="time"
              />
              <button>Submit a tour request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertsDetailsPage;

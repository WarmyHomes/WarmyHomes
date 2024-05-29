"use client";

import React, { useRef, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgTag } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import GoogleMapComponent from "@/components/common/misc/service-components/GoogleMapComponent";
import { createNewTourRequestsAction } from "@/actions/new-advert-action";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const schema = Yup.object().shape({
  tour_date: Yup.string().required("Tour date is required"),
  tour_time: Yup.string().required("Tour time is required"),
});

const AdvertsDetailsComponent = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    tour_time: "",
    tour_date: "",
  });
  const [active, setActive] = useState(data.images?.[0] ||  '' 
  );

  const onImageClick = (el) => {
    setActive(el);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createNewTourRequestsAction({
        ...formData,
        id: data?.id,
      });
      setFormData({tour_date: '', tour_time: ''  })
      if (result.success) {
        formRef.current.reset();
        alert(result.message); // veya istediğiniz bildirim türünü kullanabilirsiniz
      } else {
        alert(result.message); // veya istediğiniz bildirim türünü kullanabilirsiniz
      }
    } catch (error) {
       alert("Couldn't save the new request!");
    }
  };

  return (
    <div className="adverts-details-page-container">
      <div className="advert-detail-page-header">
        <div className="advert-detail-header-left">
          <h2>{data.title}</h2>
          <div className="all-attributes-container">
            <div className="single-item">
              <MdOutlineLocationOn className="item-icon" />
              <p>{`${data?.location} ${data?.city_id}, ${data?.country_id}`}</p>
            </div>
            <div className="single-item">
              <CgTag className="item-icon" />
              <p>For sale</p>
            </div>
            <div className="single-item">
              <FaRegClock className="item-icon" />
              <p>{new Date(data.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="single-item">
              <FaRegEye className="item-icon" />
              <p>{data.view_count}</p>
            </div>
          </div>
        </div>
        <div className="advert-detail-header-right">
          <h1>${data.price?.toFixed?.(2)}</h1>
        </div>
      </div>
      <div className="advert-detail-page-main">
        <div className="advert-detail-page-main-left">
          <div className="image-schowcase-container">
            <img src={active} alt="" className="main-image" />
            <div className="images-container">
              {data?.images?.length ? data?.images.map((el) => (
                <img
                  onClick={() => onImageClick(el)}
                  src={el}
                  alt=""
                  className="main-image"
                />
              )):null}
            </div>
          </div>
          <div className="description-container">
            <h5>Description</h5>
            <p>{data.description}</p>
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

            <form ref={formRef} onSubmit={onSubmit}>
              <input
                type="date"
                placeholder="Tour date"
                name="tour_date"
                id="tour_date"
                value={formData.tour_date}
                onChange={handleChange}
              />
              <input
                type="time"
                placeholder="Tour time"
                name="tour_time"
                id="tour_time"
                value={formData.tour_time}
                onChange={handleChange}
              />
              <button type="submit">Submit a tour request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertsDetailsComponent;

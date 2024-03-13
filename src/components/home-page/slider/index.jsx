import React from "react";
import slides from "@/helpers/data/slider.json";
import "./sliders.scss";
import Image from "next/image";

const Slider = () => {
  return (
    <div id="slider" className="carousel slide">
      <div className="carousel-indicators">
        {slides.map((itemi, index) => (
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
          >
            {" "}
          </button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Image
              src={`/images/slider/${item.image}`}
              className="d-block w-100"
              alt={item.title}
              width={616}
              height={405}
            />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

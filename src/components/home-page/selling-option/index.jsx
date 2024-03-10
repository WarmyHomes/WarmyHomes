import React from "react";
import { config } from "@/helpers/config";
import Image from "next/image";
import { GoShieldLock } from "react-icons/go";
import { GiKeyCard,GiGreenhouse } from "react-icons/gi";
import "./selling-option.scss";
const SellingOption = () => {
  return (
    <div className='selling-option-container p-3  '>
      <div className='row '>
      <div className='col selling-option-left-side order-lg-1 order-2 ' lg={6}>
          <div className="row left-side-description">
            <h2>
              {config.selling.title} <br /> {config.selling.desc}
            </h2>
          </div>
          <div className="row selling-option">
            <span className="col-md-3 circle">
            <GiKeyCard  />
            </span>
            <div className="col-md-9 option-text">
              <h5>{config.selling.description.techTitle} </h5>
              <span>
                {config.selling.description.techDesc}
              </span>
            </div>
          </div>
          <div className="row selling-option">
            <span className="col-md-3 circle">
            <GiGreenhouse />
            </span>
            <div className="col-md-9 option-text">
              <h5>{config.selling.description.sustainabilityTitle} </h5>
              <span>
                {config.selling.description.sustainabilityDesc}
              </span>
            </div>
          </div>
          <div className="row selling-option  ">
            <span className="col-md-3 circle">
              <GoShieldLock />
            </span>
            <div className="col-md-9 option-text">
              <h5> {config.selling.description.remoteTitle}</h5>
              <span>
                {config.selling.description.remoteDesc}
              </span>
            </div>
          </div>
        </div>
        <div className="col selling-option-right-side order-lg-2 order-1" lg={6}>
          <Image
            src={`/images/selling-option.png`}
            className="selling-option-img  "
            fluid="true"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};
export default SellingOption;
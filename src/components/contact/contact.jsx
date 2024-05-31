"use client";

import React from "react";
import "./index.scss";
import PageHeader from "@/components/common/page-header";
import GoogleMapComponent from "@/components/common/misc/service-components/GoogleMapComponent";
import ContactForm from "@/components/contact/contact-form";
import Spacer from "@/components/common/misc/spacer";

const Contact = () => {
  const cities = [
    {
      name: "PARIS",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNo: "(315) 905-2321",
      icon: "/icons/paris.svg",
    },

    {
      name: "LONDON",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNo: "(315) 905-2321",
      icon: "/icons/london.svg",
    },
    {
      name: "ISTANBUL",
      address: "1301 2nd Ave, Seattle, WA 98101",
      phoneNo: "(315) 905-2321",
      icon: "/icons/istanbul.svg",
    },
  ];

  return (
    <div className="contact-us-page-main-container">
      <PageHeader title={"Contact Us"} />
      <GoogleMapComponent
        styleOptions={{
          width: "100%",
          height: "70vh",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "40px",
        }}
      />

      <div className="contact-us-form-wrapper-in-page">
        <ContactForm />
      </div>

      <div className="content-right-to-form">
        <h2>We’d Love To Hear From You.</h2>
        <p>
          We are here to answer any question you may have. As a partner of
          corporates, realton has more than 9,000 offices of all sizes and all
          potential of session
        </p>
      </div>

      <Spacer />
      <Spacer />

      <div className="visit-our-offices-container">
        <div className="visit-our-offices-top">
          <h3>Visit Our Office</h3>
          <h6>
            Realton has more than 9,000 offices of all sizes and all potential
            of session.
          </h6>
        </div>

        <div className="all-cities-info-container">
          {cities.map((el) => (
            <div className="single-city-container">
              <div className="city-icon-container">
                <img src={el?.icon} alt={el?.name} />
              </div>
              <div className="info-container">
                <h5>{el?.name}</h5>
                <p>{el?.address}</p>
                <p>{el?.phoneNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Spacer />
      <Spacer />
    </div>
  );
};

export default Contact;

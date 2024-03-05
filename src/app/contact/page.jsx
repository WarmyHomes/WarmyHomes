"use client";

import React from "react";
import "./index.scss";
import PageHeader from "@/components/common/page-header";
import GoogleMapComponent from "@/components/common/misc/service-components/GoogleMapComponent";
import ContactForm from "@/components/contact/contact-form";
import Spacer from "@/components/common/misc/spacer";

const ContactPage = () => {
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
    </div>
  );
};

export default ContactPage;

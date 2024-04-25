import React, { useRef, useState } from "react";
import "./contact-form.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormState } from "react-dom";
import { initialResponse } from "@/helpers/form-validation";
import { createContactUsQueryAction } from "@/actions/contact-us-queries-actions";
import { swalAlert } from "@/helpers/swal";

const ContactForm = () => {
  const [state, dispatch] = useFormState(
    createContactUsQueryAction,
    initialResponse
  );
  const formRef = useRef(null);

  console.log(state, "state");

  if (state?.message) {
    if (state?.success) {
      formRef?.current?.reset();
      swalAlert(state?.message, "success");
    } else {
      swalAlert(state?.message, "error");
    }
  }
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div className="contact-us-form-main-container">
      <h3>Have a question? Get in touch!</h3>
      <form
        className="contact-us-form"
        action={dispatch}
        noValidate
        ref={formRef}
      >
        <div className="form-input-container">
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
          />
          <div className="invalid-feedback">{state?.errors?.firstName}</div>
        </div>
        <div className="form-input-container">
          <label>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <div className="invalid-feedback">{state?.errors?.lastName}</div>
        </div>
        <div className="form-input-container">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <div className="invalid-feedback">{state?.errors?.email}</div>
        </div>
        <div className="form-input-container">
          <label>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message here..."
            required
          />
          <div className="invalid-feedback">{state?.errors?.message}</div>
        </div>

        <div className="form-recaptcha-container">
          <ReCAPTCHA
            sitekey="6LeuCyonAAAAAB7ZwNOWN1BMtrCfGfBcLGgU8C0z"
            onChange={handleRecaptchaChange}
          />
        </div>
        <button className="submit-form-button">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;

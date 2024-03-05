import React from "react";
import "./contact-form.scss";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div className="contact-us-form-main-container">
      <h3>Have a question? Get in touch!</h3>
      <form className="contact-us-form">
        <div className="form-input-container">
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
          />
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
        </div>
        <div className="form-input-container">
          <label>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message here..."
            required
          />
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

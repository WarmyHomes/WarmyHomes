import React from "react";
import Logo from "../header/logo";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "@/components/contact/contact-menu";
import "./footer.scss";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Logo />
            <p className="mt-4">{config.project.description}</p>
            <div className="d-flex">
              <button className="btn btn-primary btn-lg mb-2 me-3">
                App Store <FaAppStore />
              </button>
              <button className="btn btn-primary btn-lg mb-2 ">
                Google Play <FaGooglePlay />
              </button>
            </div>
          </div>
          <div className="col-sm-6 col-lg ">
            <h3> Quick Links</h3>
            <MainMenu className="nav flex-column" />
          </div>
          <div className="col-sm-6 col-lg">
            <h3>Social</h3>

            <SocialMenu className="nav flex-column" />
          </div>
          <div className="col-lg">
            <h3>Contact</h3>
            <ContactMenu className="nav flex-column" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

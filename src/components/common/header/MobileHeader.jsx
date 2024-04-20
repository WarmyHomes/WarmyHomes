import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const MobileHeader = ({ show, toggle }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <Offcanvas show={show} onHide={toggle} backdrop="static">
      <Offcanvas.Header
        closeButton
        className="mobile-menu-background"
      ></Offcanvas.Header>
      <Offcanvas.Body className="mobile-menu-background">
        <Link href={"/"}>
          <Image
            width={210}
            height={50}
            src={
              isMobile
                ? "/images/logo/logo-white2.png"
                : "/images/logo/logo.png"
            }
          />
        </Link>
        <Menu />
        <div className="header-right-container">
          <div className="login-signup-buttons">
            <i className="bi bi-person"></i>
            <button>
              <Link href={"/"}>Login</Link>
            </button>
            <span>/</span>
            <button>
              <Link href={"/"}>Register</Link>
            </button>
          </div>
          <button className="add-property-button">
            <Link href={"/"}>
              Add Property <img width={35} height={35} src="/icons/arrow.svg" />
            </Link>
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileHeader;

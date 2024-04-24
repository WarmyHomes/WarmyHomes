"use client";

import Image from "next/image";
import "./Header.scss";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import MobileHeader from "./MobileHeader";
import { useState } from "react";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <header className="header-main-container">
      <div className="header-left-container">
        <Link href={"/"}>
          <Image width={210} height={50} src={"/images/logo/logo.png"} />
        </Link>
        {!isMobile && <Menu />}
      </div>
      <div className="header-right-container">
<<<<<<< Updated upstream
        {!isMobile && (
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
        )}
        {!isMobile && (
          <button className="add-property-button">
            <Link href={"/"}>
              Add Property <img width={35} height={35} src="/icons/arrow.svg" />
            </Link>
=======
        <div className="login-signup-buttons">
          <i className="bi bi-person"></i>
          <button>
            <Link href={"/login"}>Login</Link>
          </button>
          <span>/</span>
          <button>
            <Link href={"/register"}>Register</Link>
>>>>>>> Stashed changes
          </button>
        )}
        <div className="burger-icon-container">
          <CiMenuBurger onClick={toggle} className="burger-menu-icon" />
        </div>
      </div>
      {isMobile && <MobileHeader show={show} toggle={toggle} />}
    </header>
  );
}

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import "./user-menu.scss";

const UserMenu = ({ show, toggle }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <Offcanvas show={show} onHide={toggle} backdrop="static">
      <Offcanvas.Header
        closeButton
        className="user-menu-background"
      ></Offcanvas.Header>
      <Offcanvas.Body className="user-menu-background">
        <Link href={"/"}>
          <Image width={210} height={50} src={"/images/logo/logo-white2.png"} />
        </Link>

        <nav className="user-menu-nav">
          <ul>
            <li>
              <Link href={"/profile"}>My Profile</Link>
            </li>
            <li>
              <Link href={"/change-password"}>Change Password</Link>
            </li>
            <li>
              <Link href={"/my-properties"}>My Properties</Link>
            </li>
            <li>
              <Link href={"/add-property"}>Add property</Link>
            </li>
            <li>
              <Link href={"/tour-requests"}>Tour Requests</Link>
            </li>
            <li>
              <Link href={"/reset-password"}>Reset Password</Link>
            </li>
            <li>
              <Link href={"/logout"}>Logout</Link>
            </li>
          </ul>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserMenu;

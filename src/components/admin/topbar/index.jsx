"use client";

import React from "react";
import "./index.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminTopbar = ({ setIsFullMenu }) => {
  return (
    <div
      className="admin-top-bar-container"
      onClick={() => console.log("Hello")}
    >
      <div
        className="hamburger-icon-container"
        onClick={() => setIsFullMenu((prev) => !prev)}
      >
        <RxHamburgerMenu className="icon" />
      </div>
      <h6 className="dashboard-topbar-heading">Home / Dashboard</h6>
    </div>
  );
};

export default AdminTopbar;

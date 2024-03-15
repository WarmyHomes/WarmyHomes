"use client";

import React from "react";
import "./page.scss";
import { RiSearch2Line } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";

const ContactMessagePage = () => {
  return (
    <div className="contact-messages-list-page-container">
      <div className="list-filters-main-container">
        <div className="search-input-container">
          <input type="text" placeholder="Type something" />
          <div className="search-icon-container">
            <RiSearch2Line className="icon" />
          </div>
        </div>
        <div className="type-selector-conatiner">
          <Dropdown className="type-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search In
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ContactMessagePage;

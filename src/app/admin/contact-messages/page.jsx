"use client";

import React, { useState } from "react";
import "./page.scss";
import { RiSearch2Line } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";
import DataTable, { Column } from "@/components/common/table";

const ContactMessagePage = () => {
  const [selected, setSelected] = useState("1");

  const generateContent = (numRecords) => {
    const content = [];

    for (let i = 1; i <= numRecords; i++) {
      content.push({
        id: i,
        name: `Name ${i}`,
        surname: `Surname ${i}`,
        username: `username${i}`,
      });
    }

    return content;
  };

  const numRecords = 10; // Number of records you want to generate
  const content = generateContent(numRecords);

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
          <p>Search in</p>
          <Dropdown
            className="type-dropdown"
            onSelect={(key) => setSelected(key)}
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selected == "all"
                ? "All messages"
                : selected == "read"
                ? "Read"
                : "Unread"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={"all"}>All messages</Dropdown.Item>
              <Dropdown.Item eventKey={"read"}>Read</Dropdown.Item>
              <Dropdown.Item eventKey={"unread"}>Unread</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <DataTable
        title={`${
          selected == "all" ? "All" : selected == "read" ? "Read" : "Unread"
        } messages`}
        dataSource={content}
        dataKey="id"
        pagination={true}
        totalPages={10}
        pageNumber={0}
        pageSize={10}
      >
        <Column index={true} title="#" />
        <Column title="First Name" field="name" />
        <Column title="Last Name" field="surname" />
        <Column title="Username" field="username" />
      </DataTable>
    </div>
  );
};

export default ContactMessagePage;

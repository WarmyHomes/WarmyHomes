"use client";

import React, { useState } from "react";
import "./contact-messages.scss";
import { RiSearch2Line } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";
import DataTable, { Column } from "@/components/common/table";
import { AiOutlineDelete } from "react-icons/ai";

const ContactMessagePage = () => {
  const [selected, setSelected] = useState("1");

  const generateContent = (numRecords) => {
    const content = [];

    for (let i = 1; i <= numRecords; i++) {
      content.push({
        id: i,
        name: `Name ${i}`,
        email: `hello${i}@gmail.com`,
        actions: (
          <div className="table-actions-container">
            <AiOutlineDelete className="action-icon-color" />
          </div>
        ),
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
        <Column title="Name" field="name" />
        <Column title="Email" field="email" />
        <Column title="Actions" field="actions" />
      </DataTable>
    </div>
  );
};

export default ContactMessagePage;

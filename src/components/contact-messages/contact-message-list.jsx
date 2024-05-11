"use client";
import React, { useState } from "react";
import Link from "next/link"; // Link'i next/link modülünden içe aktarın
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import ContactMessageToolbar from "./contact-message-toolbar";
import { Dropdown } from "react-bootstrap";
import { RiSearch2Line } from "react-icons/ri";
import "./contact-messages.scss";

const ContactMessageList = ({ data }) => {
  const [selected, setSelected] = useState("all");

  const { content, totalPages, number, size } = data;

  const handleToolbar = (row) => {
    return <ContactMessageToolbar row={row} />;
  };

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
        totalPages={totalPages}
        pageNumber={number}
        pageSize={size}
      >
        <Column index={true} title="#" />
        <Column title="Name" field="first_name" />
        <Column title="E-posta" field="email" />
        <Column title="Action" template={handleToolbar} />
      </DataTable>
    </div>
  );
};

export default ContactMessageList;

"use client";
import React from "react";
import UsersToolbar from "./users-toolbar";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { RiSearch2Line } from "react-icons/ri";

import "./users-list.scss";

const UsersList = ({ data }) => {
  const { content, totalPages, number, size } = data;

  //console.log("USERDATA", size);

  const handleToolbar = (row) => {
    return <UsersToolbar row={row} />;
  };
  return (
    <div className="users-list-container">
      <h2>Users List</h2>

      <div className="list-filters-main-container">
        <div className="search-input-container">
          <input type="text" placeholder="Type something" />
          <div className="search-icon-container">
            <RiSearch2Line className="icon" />
          </div>
        </div>
      </div>

      <DataTable
        title=""
        dataSource={content}
        dataKey="id"
        pagination={true}
        totalPages={totalPages}
        pageNumber={number}
        pageSize={size}
      >
        {/* Sütunlar */}

        <Column title="First Name" field="first_name" />
        <Column title="Email" field="email" />
        <Column title="Phone" field="phone" />
        <Column title="Actions" template={handleToolbar} />
      </DataTable>
    </div>
  );
};

export default UsersList;

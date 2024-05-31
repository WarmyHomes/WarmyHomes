"use client";
import React from "react";
import Link from "next/link";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import AdvertTypeToolbar from "./advertType-toolbar";
import { RiSearch2Line } from "react-icons/ri";
import "./advert-type-list.scss";

const AdvertTypeList = ({ data }) => {
  const handleToolbar = (row) => {
    return <AdvertTypeToolbar row={row} />;
  };

  return (
    <>
      <div className="list-filters-main-container">
        <div className="search-input-container">
          <input type="text" placeholder="Type something" />
          <div className="search-icon-container">
            <RiSearch2Line className="icon" />
          </div>
        </div>
        <div className="add-new-button-container">
          <Link href="/admin/advert-types/new" className="add-new-button">
            ADD NEW
          </Link>
        </div>
      </div>

      <DataTable title={``} dataSource={data} dataKey="id" pagination={false}>
       
        <Column title="Title" field="title" />
        <Column title="Actions" template={handleToolbar} />
      </DataTable>
    </>
  );
};

export default AdvertTypeList;

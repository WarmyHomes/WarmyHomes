"use client";

import React, { useState, useEffect } from "react";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import CategoriesToolbar from "./categories-toolbar";
import { TfiCheck, TfiFacebook } from "react-icons/tfi";
import "./categories-list.scss";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";

const CategoriesList = ({ data }) => {
  const { content, totalPages, number, size } = data;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    const filteredData = content.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredContent(filteredData);
  }, [searchTerm, content]);

  const handleToolbar = (row) => {
    return <CategoriesToolbar row={row} />;
  };

  const handleCompulsory = (row) => {
    return row.compulsory ? <TfiCheck /> : <TfiFacebook />;
  };

  return (
    <div className="categories-list-page-container">
      <div className="list-filters-main-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Type something"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon-container">
            <RiSearch2Line className="icon" />
          </div>
        </div>
        <div className="add-new-button-container">
          <Link href="/admin/categories/new" className="add-new-button">
            ADD NEW
          </Link>
        </div>
      </div>

      <DataTable
        title=""
        dataSource={filteredContent.length > 0 ? filteredContent : content}
        dataKey="id"
        pagination={true}
        totalPages={totalPages}
        pageNumber={number}
        pageSize={size}
      >
        <Column title="Icon" field="icon" />
        <Column title="Title" field="title" />
        <Column title="Sequence" field="seq" />
        <Column title="Active" template={handleCompulsory} />
        <Column title="Actions" template={handleToolbar} />
      </DataTable>
    </div>
  );
};

export default CategoriesList;

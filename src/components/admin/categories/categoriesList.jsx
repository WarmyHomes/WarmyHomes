"use client"


import React, { useState, useEffect } from 'react';
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import CategoriesToolbar from './categories-toolbar';
import { TfiCheck, TfiFacebook } from "react-icons/tfi";
import "./categories-list.scss";

const CategoriesList = ({ data }) => {
  const { content, totalPages, number, size } = data;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    const filteredData = content.filter(item => {
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

    <div className="container">

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" >
          ara
        </button>
        <button className="add-new-button">
          <a href="/admin/categories/new">Yeni Ekle</a>
        </button>
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

"use client"
import React from 'react'
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import CategorisToolbar from './categories-toolbar';
import "./categories-list.scss"
const CategoriesList = ({ data }) => {


 const { content, totalPages, number, size } = data;

 

const handleToolbar = (row) => {
    return <CategorisToolbar row={row} />;
  };
  return (

    <div className="container">
      
 <div className="input-container">
      <input type="text" className="input-field" />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
      <button className="add-new-button">Add New</button>
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
      <Column title="Icon" field="icon" /> 
      <Column title="title" field="title" /> 
      <Column title="Sequence" field="seq" /> 
      <Column title="Active" field="isActive" />
      <Column title="Actions" template={handleToolbar} />
    </DataTable>
  </div>
  )
}

export default CategoriesList;


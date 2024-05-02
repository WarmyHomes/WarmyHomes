"use client"
import React from 'react'
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import CategorisToolbar from './categories-toolbar';

const CategoriesList = ({ data }) => {

  console.log("CategoriesList: 1",data)

 const { content, totalPages, number, size } = data;

 console.log("content: 2",content)
 console.log("totalpage: 2",totalPages)
 console.log("number: 2",number)
 console.log("size: 2",size)

const handleToolbar = (row) => {
    return <CategorisToolbar row={row} />;
  };
  return (

    <div className="container">
    <h2>Categoriest List</h2>
    
    <DataTable
      title="user List"
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


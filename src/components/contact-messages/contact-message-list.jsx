"use client"
import React from 'react'
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import ContactMessageToolbar from './contact-message-toolbar';

const ContactMessageList = ({data}) => {

 const { content, totalPages, number, size } = data;


const handleToolbar = (row) => {
    return <ContactMessageToolbar row={row} />;
  };
  return (

    <div className="container">
    
    <DataTable
      title="Contact Message List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
    >
    
      {/* Sütunlar */}
      
      <Column title="Name" field="first_name" /> 
      <Column title="Email" field="email" /> 
      <Column title="Actions" template={handleToolbar} />
    </DataTable>
  </div>
  )
}

export default ContactMessageList;


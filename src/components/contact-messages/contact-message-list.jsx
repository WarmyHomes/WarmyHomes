"use client"
import React from 'react';
import Link from 'next/link'; // Link'i next/link modülünden içe aktarın
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import ContactMessageToolbar from './contact-message-toolbar';

const ContactMessageList = ({ data }) => {

  const { content, totalPages, number, size } = data;

  const handleToolbar = (row) => {
    return <ContactMessageToolbar row={row} />;
  };

  return (
    <div className="container">
      <DataTable
        title="İletişim Mesaj Listesi"
        dataSource={content}
        dataKey="id"
        pagination={true}
        totalPages={totalPages}
        pageNumber={number}
        pageSize={size}
      >
        <Column title="Name" field="first_name" /> 
        <Column title="E-posta" field="email" /> 
        <Column title="Action" template={handleToolbar} />
     
      </DataTable>
    </div>
  );
}

export default ContactMessageList;

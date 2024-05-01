"use client"
import React from 'react'
import UsersToolbar from './users-toolbar';
import DataTable, { Column } from "@/components/common/form-fields/data-table";

const UsersList = ({data}) => {

 const { content, totalPages, number, size } = data;

 console.log("USERDATA",size)

const handleToolbar = (row) => {
    return <UsersToolbar row={row} />;
  };
  return (

    <div className="container">
    <h2>Users List</h2>
    
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
      
      <Column title="first_name" field="first_name" /> 
      <Column title="email" field="email" /> 
      <Column title="phone" field="phone" />
      <Column title="Actions" template={handleToolbar} />
    </DataTable>
  </div>
  )
}

export default UsersList;


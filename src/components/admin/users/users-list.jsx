"use client"
import React from 'react'
import UsersToolbar from './users-toolbar';
import DataTable, { Column } from "@/components/common/form-fields/data-table";

const UsersList = ({data}) => {

const {title} = 
data;
const handleToolbar = (row) => {
    return <UsersToolbar row={row} />;
  };
  return (

    <div className="container">
    <h2>Users List</h2>
    
    <DataTable
      title="id"
      dataSource={[]} 
      dataKey="id" 
      pagination={false} 
    >
      {/* Sütunlar */}
      
      <Column title="Name" field="name" /> {/* Başlık sütunu */}
      <Column title="Email" field="email" /> {/* Başlık sütunu */}
      <Column title="Phone" field="phone" /> {/* Başlık sütunu */}
      <Column title="Actions" template={handleToolbar} /> {/* Aracılar sütunu */}
    </DataTable>
  </div>
  )
}

export default UsersList;
"use client"
import React from 'react';
import Link from "next/link";
import DataTable, { Column } from '@/components/common/form-fields/data-table';
import AdvertTypeToolbar from './advertType-toolbar';

const AdvertTypeList = ({ data }) => {

  const handleToolbar = (row) => {
		return <AdvertTypeToolbar row={row} />;
	};
 

  return (
    <>
      <div className="container">
        <h2>AdvertType List</h2>
        <Link
				href="/admin/advert-types/new"
				className="btn btn-dark mb-3"
			>
				New
			</Link>
      <DataTable 
      title="" 
      dataSource={data} 
      dataKey="id"
       pagination={false}>
        
      
      <Column title="Title" field="title" />
      <Column title="Tools" template={handleToolbar} />
    </DataTable>
      </div>
    </>
  );
};

export default AdvertTypeList;

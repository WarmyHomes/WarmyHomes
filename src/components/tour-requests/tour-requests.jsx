"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import React from "react";
import UserTourRequestToolBar from "./tour-requests-tool-bar";




const TourRequests = ({ data }) => {
  const {content, totalPages, number, size} = data;
  const handleToolbar = (row) => {
    return <UserTourRequestToolBar row={row} />
  }
  return (
    <div className="tour-requests-conitainer mt-3">
      <DataTable title={``} dataSource={data} dataKey="id" pagination={false}>
        <Column title="property" field = "advert_id"/>
        <Column />
        <Column />
        <Column title="Owner" field = "owner_user"/>
        <Column title="Guest" field = "guest_user"/>
        <Column title="Status" field = "status"/>
        <Column title="Tour Date" field = "tour_date"/>
        <Column title="Tour Time" field = "tour_time"/>
        <Column title="Actions" template={handleToolbar} />

        
      </DataTable>
      
      
    </div>
  );
};

export default TourRequests;
"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import TourRequestsToolBar from "./tour-request-toolbar";
import "./admin-tour-request-list.scss";

const AdminTourRequests = ({ data }) => {

  const {content, totalPages, number, size} = data;


  console.log("tour-data:",size);

  const handleToolbar = (row) => {
    return <TourRequestsToolBar row={row} />
  }

  

  return (
    <div className="tour-requests-conitainer mt-3">
      
      <div className="list-filters-main-container">
        <div className="search-input-container">
          <input type="text" placeholder="Type Something" />
          <div className="search-icon-container">
            <RiSearch2Line className="icon" />
          </div>
        </div>
      </div>

      <DataTable title={``}
       dataSource={data} 
       dataKey="id" 
       pagination={false}>
        
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

export default AdminTourRequests;

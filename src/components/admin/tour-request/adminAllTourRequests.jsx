"use client";
import TourRequestSearchBar from "./tour-request-search-bar/tour-request-search-bar";
import TourRequestCard from "./tour-request-card/tour-request-card";
import "./admin-all-tour-requests.scss";
import { getAllTourRequestWithPage } from "@/services/admin-tour-request-details-service";

const AdminAllTourRequest =  ({ data }) => {
  const { content, totalPages, number, size } = data;

  
  return (
    <div className="main-container">
      <TourRequestSearchBar></TourRequestSearchBar>

      <div className="container">
        <div className="row justify-content-evenly  ">
          <div className="col-md-2  text-center">Property</div>
          <div className="col-md-1  text-center">Owner</div>
          <div className="col-md-1  text-center">Guest</div>
          <div className="col-md-1  text-center">Status</div>
          <div className="col-md-1  text-center">Tour Date</div>
          <div className="col-md-1  text-center">Tour Time</div>
          <div className="col-md-1  text-center">action</div>
        </div>
      </div>

      <TourRequestCard></TourRequestCard>
    </div>
  );
};

export default AdminAllTourRequest;

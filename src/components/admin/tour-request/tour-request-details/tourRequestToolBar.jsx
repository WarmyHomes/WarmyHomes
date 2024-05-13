"use client"
import { swalAlert, swalConfirm } from "@/helpers/swal";
import { deleteTourRequestWithId } from "@/services/admin-tour-request-details-service";
import React from "react";

const TourRequestToolBar = ({tourRequsetsId}) => {

  const {tourRequsetsId} = tourRequsetsId;

  const handleDelete = async()=>{
    const res = await swalConfirm("Are you Sure to delete tour request ?");
    if(!res.isConfirmed) return ;
    try{
      const res = await deleteTourRequestWithId(tourRequsetsId);
    }catch(err){
      swalAlert(err.message, "error");
    }
  }


  return (
    <div className="row mt-3">
      <div className="col text-center">
        <Button
          variant="danger"
          className="mt-3"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TourRequestToolBar;

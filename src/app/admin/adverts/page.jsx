import AdvertsListing from "@/components/admin/adverts/adverts-listing";
import PageHeader from "@/components/common/page-header";
import React from "react";

const page = () => {
  return (
   <>
    <PageHeader title={"Adverts"} />
    <div className="my-favorites-page-container">
      <AdvertsListing />
    </div>
    </>
  );
};

export default page;

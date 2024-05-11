import AdvertTypeList from "@/components/admin/advert-types/advert-type-list";
import { getAllAdvertType } from "@/services/advertType-servise";
import React from "react";

const page = async ({ searchParams }) => {
  const { page } = searchParams;

  // const res = await getAllAdvertType(page);

  // const data = await res.json();

  // console.log("DATA", data)

  // if (!res.ok) throw new Error(data.message);
  return (
    <>
      <div className="contact-messages-list-page-container">
        <AdvertTypeList data={[{ id: "123", title: "Jehll" }]} />
      </div>
    </>
  );
};

export default page;

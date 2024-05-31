
import PageHeader from "@/components/common/page-header";
import MyFavorites from "@/components/my-favorites/my-favorites-list";
import { getAllMyFavorites } from "@/services/my-favorites";
import React from "react";



const page = async ({ searchParams }) => {
  const { page } = searchParams;

 // const res = await getAllMyFavorites(page);

 // const data = await res.json();

 // console.log("DATA", data);

 // if (!res.ok) throw new Error(data.message);
  return (
    <>
      <div className="advert-types-list-page-container">
      <PageHeader title={"Yapım Aşamasında"}/> 
     
      </div>
    </>
  );
};

export default page;

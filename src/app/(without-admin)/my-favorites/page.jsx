
import PageHeader from "@/components/common/page-header";
import MyFavorites from "@/components/my-favorites/my-favorites-list";
import { getAllMyFavorites } from "@/services/my-favorites";
import React from "react";
import MyFavoritesss from "./aaa/page";



const page = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllMyFavorites(page);

  const data = await res.json();

  console.log("DATA", data);


  return (
    <>
      <div className="advert-types-list-page-container">
      <MyFavoritesss data={data}/> 
     
      </div>
    </>
  );
};

export default page;

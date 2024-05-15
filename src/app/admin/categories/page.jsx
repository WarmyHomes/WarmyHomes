import CategoriesList from "@/components/admin/categories/Categories-list";
import { getAllAdminsCategories } from "@/services/categories-servise";
import React from "react";

const page = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllAdminsCategories(page);

  const data = await res.json();

  //console.log("Categories", data)

  if (!res.ok) throw new Error(data.message);
  return (
    <>
      <CategoriesList data={data} />
    </>
  );
};

export default page;

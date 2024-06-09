import CategoriesList from "@/components/admin/categories/Categories-list";
import PageHeader from "@/components/common/page-header";
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
    <PageHeader title={"Categories"} />
      <CategoriesList data={data} />
    </>
  );
};

export default page;

import UsersList from "@/components/admin/users/users-list";
import PageHeader from "@/components/common/page-header";
import { getAllUsers } from "@/services/user-service";
import React from "react";

const UsersPage = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllUsers(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return (
    <>
    <PageHeader title={"Users Details"} />
      <UsersList data={data} />
    </>
  );
};

export default UsersPage;

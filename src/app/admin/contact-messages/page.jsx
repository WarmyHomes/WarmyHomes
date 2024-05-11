import ContactMessageList from "@/components/contact-messages/contact-message-list";
import { getAllMessagesByPage } from "@/services/contact-us-queries-service";
import React from "react";

const page = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllMessagesByPage(page);

  const data = await res.json();

  console.log("DATA", data);

  if (!res.ok) throw new Error(data.message);
  return (
    <>
      <ContactMessageList data={data} />
    </>
  );
};

export default page;

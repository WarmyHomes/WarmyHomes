import React from "react";
import { getIdContactMessage } from "@/services/contact-us-queries-service";
import MessageDetail from "@/components/contact-messages/message-detail/message-details";
import PageHeader from "@/components/common/page-header";

const page = async ({ params }) => {


	const res = await getIdContactMessage(params.id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

  return(
    <>
    <PageHeader title={"Contact Message Edit"} />
    <MessageDetail data={data}/>
    </>
  )
}
  export default page


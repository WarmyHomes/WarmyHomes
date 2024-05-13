
import AdminAllTourRequest from '@/components/admin/tour-request/adminAllTourRequests'
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import { getAllTourRequestWithPage } from '@/services/admin-tour-request-details-service'
import React from 'react'

const page = async({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllAdminsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);
  console.log("data: ",data);
  return (
    <>
      <Spacer height={5}></Spacer>
      <AdminAllTourRequest data={data}></AdminAllTourRequest>
    </>
    
  )
}
export default page;
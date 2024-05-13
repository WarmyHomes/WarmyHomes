
import AdminAllTourRequest from '@/components/admin/tour-request/adminAllTourRequests'
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import { getAllTourRequestWithPage } from '@/services/admin-tour-request-details-service'
import React from 'react'

const page = async({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllTourRequestWithPage(page);

	const data = await res.json();
  console.log("Data>>>>>>>> ",data);
   
	if (!res.ok) throw new Error(data.message);

  
  return (
    <>
      <Spacer height={5}></Spacer>
      <AdminAllTourRequest data={data}/>
    </>
    
  )
}
export default page;
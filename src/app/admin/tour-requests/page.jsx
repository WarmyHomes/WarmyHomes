import AdminTourRequests from '@/components/admin/admin-tour-request/admin-tour-request';
import Spacer from '@/components/common/misc/spacer'
import { getAllTourRequestWithPage } from '@/services/admin-tour-request-details-service';

import React from 'react'

<<<<<<< HEAD
const page = async({ searchParams}) => {
  const {page} = searchParams;
  const res = await getAllTourRequestWithPage(page);
  const data = await res.json();
  console.log("DATA",data);
  if(!res.ok) throw new Error(data.message);
  return (
    <>
      <AdminTourRequests data={data}/>
=======
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
>>>>>>> main
    </>
    
  )
}
export default page;
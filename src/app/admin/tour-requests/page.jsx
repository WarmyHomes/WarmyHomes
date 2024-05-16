import AdminTourRequests from '@/components/admin/admin-tour-request/admin-tour-request';
import Spacer from '@/components/common/misc/spacer'
import { getAllTourRequestWithPage } from '@/services/admin-tour-request-details-service';

import React from 'react'

const page = async({ searchParams}) => {
  const {page} = searchParams;
  const res = await getAllTourRequestWithPage(page);
  const data = await res.json();
  console.log("DATA",data);
  if(!res.ok) throw new Error(data.message);
  return (
    <>
      <AdminTourRequests data={data}/>
    </>
    
  )
}
export default page;
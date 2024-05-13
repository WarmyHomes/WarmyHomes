import AdminTourRequestDetails from '@/components/admin/tour-request/tour-request-details/tour-request-details'
import { getTourRequestWithId } from '@/services/admin-tour-request-details-service'
import React from 'react'

const page = async ({ params }) => {

  const res = await getTourRequestWithId(params.id);
  const data = await res.json();

  if(!res.ok){
    throw new Error(data.message);
  }

  
  return (
    <>
      <PageHeader title={"Tour Request Details"}/>
      <Spacer></Spacer>
      <AdminTourRequestDetails />
    </>
    
  )
}

export default page
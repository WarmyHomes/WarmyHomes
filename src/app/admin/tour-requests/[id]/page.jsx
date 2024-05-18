import AdminTourRequestDetails from '@/components/admin/admin-tour-request/details/admin-tour-request-details'
import { getTourRequestDetailsForAdmin } from '@/services/admin-tour-request-details-service'
import React from 'react'

const page = async ( {params} ) => {
  const res = await getTourRequestDetailsForAdmin(params.id);
  const data = await res.json();
  if(!res.ok){
    throw new Error(data.message);
  }
  return (
    <div>
      <AdminTourRequestDetails data={data} />
    </div>
    
  )
}

export default page
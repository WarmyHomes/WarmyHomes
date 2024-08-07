import AdminTourRequestDetails from '@/components/admin/admin-tour-request/details/admin-tour-request-details'
import Spacer from '@/components/common/misc/spacer';
import PageHeader from '@/components/common/page-header';
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
      <PageHeader title={"Tour Request Details"} />
      <Spacer height={5}/>
      <AdminTourRequestDetails data={data} />
    </div>
    
  )
}

export default page
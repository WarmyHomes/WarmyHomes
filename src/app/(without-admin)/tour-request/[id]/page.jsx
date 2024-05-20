import Spacer from '@/components/common/misc/spacer';
import PageHeader from '@/components/common/page-header';
import UsersTourRequestDetails from '@/components/tour-requests/details/tour-request-details';
import { getTourRequestDetailsForUser } from '@/services/tour-requests-service';
import React from 'react'

const page = async ( {params} ) => {
  const res = await getTourRequestDetailsForUser(params.id);
  const data = await res.json();
  if(!res.ok){
    throw new Error(data.message);
  }
  return (
    <div>
      <PageHeader title={"MY TOUR REQUESTS"} />
      <Spacer height={50} />
      <UsersTourRequestDetails data={data} />
      <Spacer height={100}/>
    </div>
    
  )
}

export default page
import UsersTourRequestDetails from '@/components/tour-requests/details/tour-request-details';
import { getUsersTourRequestDetails } from '@/services/tour-requests-service';
import React from 'react'

const page = async ( {params} ) => {
  const res = await getUsersTourRequestDetails(params.id);
  const data = await res.json();
  if(!res.ok){
    throw new Error(data.message);
  }
  return (
    <div>
      <UsersTourRequestDetails data={data} />
    </div>
    
  )
}

export default page
import Properties from '@/components/properties/properties'
import { allAdvertsQueryByPage } from '@/services/create-advert-service';
import React from 'react'

const page = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await allAdvertsQueryByPage(page);

  const data = await res.json();

  //console.log("DATA", data);

  if (!res.ok) throw new Error(data.message);
  return (
    <>
      <Properties data={data}/>
    </>
  )
}

export default page
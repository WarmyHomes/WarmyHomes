import AdvertTypeList from '@/components/admin/advert-types/advert-type-list'
import { getAllAdvertType } from '@/services/advertType-servise';
import React from 'react'

const page = async ({ searchParams }) => {
	const { page } = searchParams;
  


	const res = await getAllAdvertType(page);

	const data = await res.json();

	if (!res.ok) throw new Error(data.message);
  return (
    <>
      <AdvertTypeList data={data}/>
    </>
  )
}

export default page
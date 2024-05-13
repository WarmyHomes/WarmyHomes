import AdvertTypeEdit from '@/components/admin/advert-types/advert-type-edit';
 '@/services/advertType-servise';import { getAdvertTypeById } from
import React from 'react'

const page = async ({ params }) => {
	//console.log(params.id)
	const res = await getAdvertTypeById(params.id);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	}


  return (
    <div>
		<AdvertTypeEdit data={data}/>
	</div>
  )
}

export default page
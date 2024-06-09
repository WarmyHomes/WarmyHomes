import AdvertTypeEdit from '@/components/admin/advert-types/advert-type-edit';
import CategoriesEdit from '@/components/admin/categories/categories-edit';
import PageHeader from '@/components/common/page-header';

 import { getAdvertTypeById } from  '@/services/advertType-servise';
import { getCategoriesById } from '@/services/categories-servise';
 import React from "react";


const page = async ({ params }) => {


	
	const res = await getCategoriesById(params.id);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	}

	//console.log("CAT Data>>><<<", data)

  return (
	<>
	<PageHeader title={"Category Edit"} />
    <div>
		< CategoriesEdit data={data}/>
	</div>
	</>
  )
}

export default page
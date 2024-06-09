
import UserEdit from '@/components/admin/users/user-edit';
import PageHeader from '@/components/common/page-header';
import { getUserById } from '@/services/user-service';
import React from 'react'

const page = async ({ params }) => {
	
	const res = await getUserById(params.id);
	const data = await res.json();

	//console.log("User Data >>>>",data)

	if (!res.ok) {
		throw new Error(data.message);
	}


  return (
    <div>
		<PageHeader title={"User Edit"} />
		<UserEdit data={data.object}/>
	</div>
  )
}

export default page
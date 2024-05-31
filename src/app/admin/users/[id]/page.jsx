
import UserEdit from '@/components/admin/users/user-edit';
import { getUserById } from '@/services/user-service';
import React from 'react'

const page = async ({ params }) => {
	
	const res = await getUserById(params.id);
	const data = await res.json();

	

	if (!res.ok) {
		throw new Error(data.message);
	}


  return (
    <div>
		<UserEdit data={data}/>
	</div>
  )
}

export default page
"use server";

import * as Yup from "yup";
import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { deleteUsersTourRequest, getUsersTourRequestDetails } from "@/services/tour-requests-service";

export const deleteUsersTourRequestAction = async (id) => {
	if(!id) throw new Error("Id is missing");

	const res = await deleteUsersTourRequest(id);
	const data = await res.json();
	if(!res.ok){
		throw new Error(data.message);

	}
	revalidatePath(`/tour-request/${id}`);
	redirect(`/tour-request?msg${encodeURI("Tour Request Deleted Successfully.")}`);
};

export const getUsersTourRequestDetailsAction = async(id)=>{
	if(!id) throw new Error("Id is missing");
	const res = await getUsersTourRequestDetails(id);
	const data= res.json();
	if(!res.ok){
		throw new Error(data.message);
	}
} 



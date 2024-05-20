"use server";

import * as Yup from "yup";
import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { deleteUsersTourRequest, getTourRequestDetailsForUser, getUsersTourRequestDetails } from "@/services/tour-requests-service";

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

export const getTourRequestDetailsForUserAction = async (id) =>{
	if(!id) throw new Error("Id Is Missing.");
    const res = await getTourRequestDetailsForUser(id);
    const data = await res.json();
    if(!res.ok){
        throw new Error(data.message);
    }
}



"use server";

import * as Yup from "yup";
import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { deleteTourRequestWithId } from "@/services/admin-tour-request-details-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

const FormSchema = Yup.object({
    tourDate: Yup.date().required("Date must not be empty"),
    tourTime: Yup.string().required("Time must not be empty"), 
});

export const deleteTourRequestAction = async (id) => {
    if(!id) throw new Error("Id Is Missing");

    const res = await deleteTourRequestWithId(id);
    console.log("action res : ", res);
    const data = await res.json();
    console.log("action data : ",data);
    if(!res.ok){
        throw new Error(data.message);
    }
    revalidatePath(`/admin/tour-requests/${id}`);
    redirect(`/admin/tour-requests?msg=${encodeURI("TourRequest Deleted Successfully")}`);
};


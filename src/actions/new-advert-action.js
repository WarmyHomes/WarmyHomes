"use server";

import { convertFormDataToJson, response } from "@/helpers/form-validation";
import { createNewAdvert, createNewTourRequest } from "@/services/create-advert-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import * as Yup from "yup";



export const createNewAdvertAction = async (formData) => {
	try {
	  console.log("formData:", formData);
  
	  const res = await createNewAdvert(formData); // createNewAdvert fonksiyonu tanımlanmış olmalı
	  const data = await res.json();
  
	  if (!res.ok) {
		return response(false, data?.message, data?.validations); // response fonksiyonu tanımlanmış olmalı
	  } else {
		revalidatePath("/admin/advert-types"); // revalidatePath fonksiyonu tanımlanmış olmalı
		redirect(`/admin/advert-types?msg=${encodeURI("advert-types was created")}`); // redirect fonksiyonu tanımlanmış olmalı
	  }
	} catch (err) {
	  if (err instanceof Yup.ValidationError) {
		return getYupErrors(err.inner);
	  }
  
	  throw err;
	}
  };
  





export const createNewTourRequestsAction = async (formData) => {
  try {
    const result = await createNewTourRequest(formData);
    return result;
  } catch (error) {
    console.log('error', error)
    console.error('There was a problem with your createNewTourRequestAction:', error);
    throw error;
  }
};
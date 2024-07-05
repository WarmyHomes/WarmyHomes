"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { addOrRemoveAdvertFromFavorites } from "@/services/my-favorites";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";




export const myfvories = async (id) => {
    try {

        console.log("AdvertİD>>>>>>>>>>>>>>>>>",id);



      const res = await addOrRemoveAdvertFromFavorites(id);
      const data = await res.json();
  
      if (!res.ok) {
        return response(false, data?.message, data?.validations);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return getYupErrors(err.inner);
      }
  
      throw err;
    }
  
    revalidatePath("/properties");
    redirect(`/properties`);
  };
  
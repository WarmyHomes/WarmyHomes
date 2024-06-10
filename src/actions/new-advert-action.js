import { convertFormDataToJson } from "@/helpers/form-validation";
import { createNewAdvert, createNewTourRequest } from "@/services/create-advert-service";
import * as Yup from "yup";



export const createNewAdvertAction= async (prevState, formData) => {

 
	try {
    console.log("fromData>>>>>>>>>>>>>>",formData);
		

		//FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createNewAdvert(formData);
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

	revalidatePath("/admin/advert-types");
	redirect(`/admin/advert-types?msg=${encodeURI("advert-types was created")}`);
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
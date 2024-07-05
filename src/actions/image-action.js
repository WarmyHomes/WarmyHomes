
"use server";

import { getYupErrors } from "@/helpers/form-validation";
import { uploadImages } from "@/services/image-service";
import * as Yup from "yup";


export const imageYüklemeAction = async (prevState, advertId,formData) => {
	try {
	
		console.log("İmageData>>>>: ", formData);

		const res = await uploadImages(formData);
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

	revalidatePath("/");
	redirect(`/`);
};
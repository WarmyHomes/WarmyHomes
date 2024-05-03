"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getGenderValues } from "@/helpers/misc";
import { deleteCategories } from "@/services/categories-servise";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	title: Yup.string().required("Required")
});

export const createCategoriesTypeAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdvertType(fields);
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

export const updateAdvertTypeAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await updateAdvertType(fields);
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
	redirect(`/admin/advert-types?msg=${encodeURI("advert-types was updated")}`);
};

export const deleteCategoriesAction = async (id) => {
	if (!id) throw new Error("id is enes");

	const res = await deleteCategories(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/admin/categories");
	redirect(`/admin/categories?msg=${encodeURI("categories was deleted ")}`);
};

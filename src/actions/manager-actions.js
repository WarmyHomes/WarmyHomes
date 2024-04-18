"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getGenderValues } from "@/helpers/misc";
import {
	createAdvertType,
	deleteAdvertType,
	updateAdvertType,
} from "@/services/advertType-servise";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	name: Yup.string().required("Required"),
	surname: Yup.string().required("Required"),
	gender: Yup.string()
		.oneOf(getGenderValues(), "Invalid gender")
		.required("Required"),
	birthPlace: Yup.string().required("Required"),
	birthDay: Yup.date().max(new Date(), 'Invalid birthdate').required("Required"),
	phoneNumber: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
		.required("Required"),
	ssn: Yup.string()
		.matches(/\d{3}-\d{2}-\d{4}/, "Invalid ssn")
		.required("Required"),
	username: Yup.string().required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 chars")
		.matches(/[a-z]+/, "At least one lowercase")
		.matches(/[A-Z]+/, "At least one uppercase")
		.matches(/\d+/, "At least one number")
		.required("Required"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password")],
		"Password fields don't match"
	),
});

export const createAdvertTypeAction = async (prevState, formData) => {
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

	revalidatePath("/dashboard/advert-types");
	redirect(`/dashboard/advert-types?msg=${encodeURI("advert-types was created")}`);
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

	revalidatePath("/dashboard/advert-types");
	redirect(`/dashboard/advert-types?msg=${encodeURI("advert-types was updated")}`);
};

export const deleteAdvertTypeAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteAdvertType(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/advert-types");
	redirect(`/dashboard/advert-types?msg=${encodeURI("advert-types was deleted")}`);
};

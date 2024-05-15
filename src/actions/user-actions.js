"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { changePassword, deleteUser, forgotPassword, register, resetPassword, updateUser, updateUserById } from "@/services/user-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	firstname: Yup.string().required("Required"),
	lastname: Yup.string().required("Required"),
	email:Yup.string().email("Invalid email").required("Required"),
	phone: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
		.required("Required"),
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

export const createRegisterAction = async (prevState, formData) => {


	console.log("AdminCreat:>>>>>>>",formData)
 
	try {
		const fields = convertFormDataToJson(formData);

		

	

		const res = await register(fields);
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

	revalidatePath("/admin/users");
	redirect(`/login?msg=${encodeURI("User was created")}`);
	
};

export const updateUserAction = async (prevState, formData) => {
	//console.log("DATA",formData)
	try {
		const fields = convertFormDataToJson(formData);



		const res = await updateUser(fields);
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
	redirect(`/?msg=${encodeURI("User was updated")}`);
};

export const forgotPasswordAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await forgotPassword(fields);
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

	revalidatePath("/reset-password");
	redirect(`/forgot-password?msg=${encodeURI("User was updated")}`);
};
	
export const resetPasswordAction = async (prevState, formData) => {
	console.log("RESET",formData)
	try {
		const fields = convertFormDataToJson(formData);

		//FormSchema.validateSync(fields, { abortEarly: false });

		const res = await resetPassword(fields);
		const data = await res;
		console.log("RESEttttT",data)
		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		throw err;
	}

	revalidatePath("/profile");
	redirect(`/?msg=${encodeURI("Password was updated")}`);
};

export const changePasswordAction = async (prevState, formData) => {
	console.log("paralo",formData)
	try {
		const fields = convertFormDataToJson(formData);

	//FormSchema.validateSync(fields, { abortEarly: false });

		const res = await changePassword(fields);
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

	revalidatePath("/profile");
	redirect(`/?msg=${encodeURI("Password was updated")}`);
};

export const deleteUserAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteUser(id);
	
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/admin/users");
	redirect(`/admin/users?msg=${encodeURI("advert-types was deleted")}`);
};


export const updateUserByIdAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await updateUserById(fields);
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
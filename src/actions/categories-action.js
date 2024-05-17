"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getGenderValues } from "@/helpers/misc";
import { createCategories, deleteCategories, updateCategories } from "@/services/categories-servise";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	title: Yup.string().required("Required")
});

export const createCategoriesAction = async (prevState, formData) => {


	
	try {
		// Form verilerini JSON formatına dönüştürme
		const title = formData.get('title');
		const icon = formData.get('icon');
		const seq = formData.get('seq');
		const isActive = formData.get('is_active');
		const categoryPropertyKeys = JSON.parse(formData.get('category_property_keys'));

		const fields = {
			title,
			icon,
			seq,
			is_active: isActive,
			category_property_keys: categoryPropertyKeys
		};

		// Verilerin Yup şemasına uygunluğunu doğrulama
		FormSchema.validateSync(fields, { abortEarly: false });

		// Kategorileri oluşturma isteği
		const res = await createCategories(fields);

		// Sunucu yanıtını alıp JSON'a dönüştürme
		const data = await res.json();

		// Başarısız bir yanıt alındığında
		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}
	} catch (err) {
		// Yup doğrulama hatası alındığında
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		// Diğer hataları atma
		throw err;
	}

	// Başarılı bir şekilde oluşturulduğunda, yönlendirme yapma
	revalidatePath("/admin/categories");
	redirect(`/admin/categories?msg=${encodeURI("categories was created")}`);
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



export const updateCategoriesAction = async (prevState, formData) => {

//console.log("FormData>>>>>>>>>",formData)
	
	try {
		// Form verilerini JSON formatına dönüştürme
		const title = formData.get('title');
		const icon = formData.get('icon');
		const seq = formData.get('seq');
		const isActive = formData.get('is_active');
		const categoryPropertyKeys = JSON.parse(formData.get('category_property_keys'));

		const fields = {
			title,
			icon,
			seq,
			is_active: isActive,
			category_property_keys: categoryPropertyKeys
		};

		// Verilerin Yup şemasına uygunluğunu doğrulama
		FormSchema.validateSync(fields, { abortEarly: false });

		// Kategorileri oluşturma isteği
		const res = await updateCategories(fields);

		// Sunucu yanıtını alıp JSON'a dönüştürme
		const data = await res.json();

		// Başarısız bir yanıt alındığında
		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}
	} catch (err) {
		// Yup doğrulama hatası alındığında
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		// Diğer hataları atma
		throw err;
	}

	// Başarılı bir şekilde oluşturulduğunda, yönlendirme yapma
	revalidatePath("/admin/categories");
	redirect(`/admin/categories?msg=${encodeURI("categories was created")}`);
};
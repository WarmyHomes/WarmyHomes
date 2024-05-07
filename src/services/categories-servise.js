import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllAdminsCategories = async (
	name="",
	page = 0,
	size = 20,
	sort = "id",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/categories/admin?${qs}`, {
		headers: await getAuthHeader(),
		
	});
};

export const deleteCategories = async (id) => {
	return fetch(`${API_URL}/categories/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createCategories = async (payload) => {
	return fetch(`${API_URL}/categories`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

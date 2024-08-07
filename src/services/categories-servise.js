import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllAdminsCategories = async (
	query = "", // searchTerm'i ekledik

	page = 0,
	size = 20,
	sort = "id",
	type = "asc"
) => {
	const qs = `query=${query}&page=${page}&size=${size}&sort=${sort}&type=${type}`; // searchTerm'i query parametresine ekliyoruz

	
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


export const getCategoriesById = async (id) => {

	return fetch(`${API_URL}/categories/${id}`, {
		method: "get",
		headers: await getAuthHeader(),
		
	});
};

export const updateCategories = async (payload) => {

	//console.log("Payload>>>>>>",payload.id)

	return fetch(`${API_URL}/categories/${payload.id}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const getCategories = async () => {

	
	return fetch(`${API_URL}/categories`, {
		method: "get",
		headers: await getAuthHeader(),
		
	});
};
import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;


export const register = async (payload) => {
	return fetch(`${API_URL}/register`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});

      };
	  export const updateUser = async (payload) => {
		return fetch(`${API_URL}/users/auth`, {
			method: "put",
			headers: await getAuthHeader(),
			body: JSON.stringify(payload)
		});
	};
	export const forgotPassword = async (payload) => {
		return fetch(`${API_URL}/forgot-password`, {
			method: "post",
			headers: await getAuthHeader(),
			body: JSON.stringify(payload)
		});
		 };
import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";
import { clearScreenDown } from "readline";

const API_URL = config.api.baseUrl;


export const register = async (payload) => {
	console.log("payload",payload)
	return fetch(`${API_URL}/register`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});

      };
	  export const updateUser = async (payload) => {
		console.log("payload",payload)
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

		 export const resetPassword = async (payload) => {
			return fetch(`${API_URL}/reset-password`, {
				method: "post",
				headers: await getAuthHeader(),
				body: JSON.stringify(payload)
			});
			 };
			 export const changePassword = async (payload) => {
				return fetch(`${API_URL}/users/auth`, {
					method: "post",
					headers: await getAuthHeader(),
					body: JSON.stringify(payload)
				});
				 };
				 export const deleteUser = async (payload) => {
					return fetch(`${API_URL}/users/${id}/admin`, {
						method: "delete",
						headers: await getAuthHeader(),
						body: JSON.stringify(payload)
					});
					 };

					 export const getAllUsers = async (payload) => {
						return fetch(`${API_URL}/users/admin`, {
							method: "get",
							headers: await getAuthHeader(),
							body: JSON.stringify(payload)
						});
					
						  };
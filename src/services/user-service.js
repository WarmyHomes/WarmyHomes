import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";
import { clearScreenDown } from "readline";

const API_URL = config.api.baseUrl;


export const register = async (payload) => {
	//console.log("payload",payload)
	return fetch(`${API_URL}/register`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});

      };
	  export const updateUser = async (payload) => {
		//console.log("PAY:>>>>>>>>",payload)
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
			console.log("PAYlod>>>>>",payload)
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


		export const deleteUser = async (id) => {

			console.log("İd>>>>>>",id)

			return fetch(`${API_URL}/users/${id}/admin`, {
				method: "delete",
				headers: await getAuthHeader(),
				
		});
	 };

		 export const getAllUsers = async (payload) => {
				return fetch(`${API_URL}/users/admin`, {
				method: "get",
				headers: await getAuthHeader(),
				body: JSON.stringify(payload)
			});
					
		};

		export const getUserById = async (id) => {

			return fetch(`${API_URL}/users/${id}/admin`, {
				method: "get",
				headers: await getAuthHeader(),
				
			});
		};


		
		export const updateUserById = async (payload) => {

			return fetch(`${API_URL}/users/${payload.userId}/admin`, {
			   method: "put",
			  headers: await getAuthHeader(),
			  body: JSON.stringify(payload)
		 });
		};
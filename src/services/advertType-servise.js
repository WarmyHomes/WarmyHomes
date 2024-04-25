import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;


export const getAllAdvertType = async (payload) => {
	return fetch(`${API_URL}/advert-types`, {
		method: "get",
		headers: await getAuthHeader(),
	
	});

      };

	  export const getAdvertTypeById = async (id) => {
		console.log(id)
		return fetch(`${API_URL}/advert-types/${id}`, {
		
			headers: await getAuthHeader(),
			
		});
	};

	export const createAdvertType = async (payload) => {
		return fetch(`${API_URL}/advert-types`, {
			method: "post",
			headers: await getAuthHeader(),
			body: JSON.stringify(payload)
		});


		 };
		 export const deleteAdvertType = async (id) => {
			
			return fetch(`${API_URL}/advert-types/${id}`, {
			  method: "delete",
			  headers: await getAuthHeader()
			
			});
		  };
		  

   export const updateAdvertType = async (id) => {
	console.log(id)
    return fetch(`${API_URL}/advert-types/${id}`, {
       method: "put",
      headers: await getAuthHeader(),
      body: JSON.stringify(payload)
 });
};
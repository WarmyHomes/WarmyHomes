import { config } from "@/helpers/config";
import { getAuthHeader } from "@/helpers/auth";


const API_URL = config.api.baseUrl;

export const createNewContactUsQuery = async (payload) => {
  console.log("ContageM",payload );
  return await fetch(`${API_URL}/contact-messages/save`, {
   method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllMessagesByPage = async (
	page = 0,
	size = 10,
	sort = "email",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/contact-messages/getAll?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteContactMessage = async (id) => {
  
  return fetch(`${API_URL}/contact-messages/${id}`, {
    method: "delete",
    headers: await getAuthHeader(),
    body: JSON.stringify(id)
  });
   };

   export const getIdContactMessage = async (id) => {

    return fetch(`${API_URL}/contact-messages/${id}`, {
      method: "GET",
      headers: await getAuthHeader(),

    });
  };
  

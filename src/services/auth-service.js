import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;
console.log("API",API_URL)
export const login = (payload) => {
	return fetch(`${API_URL}/login`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
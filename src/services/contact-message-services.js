import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllMessagesByPage = async (
	page = 0,
	size = 20,
	sort = "date",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/contact-messages/getAll?${qs}`, {
		headers: await getAuthHeader(),
	});
};
import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;


export const getPopularAdverts = async () => {

	

	return fetch(`${API_URL}/adverts/popular/4`, {
		method: "get",
		headers: await getAuthHeader(),
	
	});

      };


import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;


//  U-02
export const getAllCities = async () => {

	return fetch(`${API_URL}/cities`, {
		method: "get",
		headers: await getAuthHeader(),
	
	});

      };
import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;


//  A-02
export const getAdvertsDependingOnCities = async () => {

	return fetch(`${API_URL}/adverts/cities`, {
		method: "get",
	
	
	});

      };


	  // A-3
	  export const getAdvertByCategory = async () => {

		return fetch(`${API_URL}/adverts/categories`, {
			method: "get",
		
		
		});
	
		  };
	

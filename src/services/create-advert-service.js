import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllMessagesByPage = async(
    page = 0,
    size = 20,
    sort = "date",
    type = "desc"
) =>{
    const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;
    
    return fetch(`${API_URL}/adverts?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createAdvertMessage = async (formData) => {
    try {
      const response = await fetch(`${API_URL}/adverts`, {
        method: "POST",
        body: formData,
        headers: {
          ...getAuthHeader(),
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      throw error;
    }
  };
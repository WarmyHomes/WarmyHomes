import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";


const API_URL = config.api.baseUrl;

export const getAllMyFavorites = async (payload) => {
    return fetch(`${API_URL}/favorites/auth`, {
    method: "get",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload)
});
        
};
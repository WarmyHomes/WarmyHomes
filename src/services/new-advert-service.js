import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAdvertType = async(id)=>{
    return fetch(`${API_URL}/advert-types/${id}`,{
        method: "get",
        headers: await getAuthHeader,
    });
};

export const getCountries = async()=>{
    return fetch(`${API_URL}/countries`,{
        method:"get",
        headers: await getAuthHeader,
    });
};

export const getCities = async()=>{
    return fetch(`${API_URL}/cities`,{
        method:"get",
        headers: await getAuthHeader,
    });
};

export const getDistricts = async()=>{
    return fetch(`${API_URL}/districts`,{
        method:"get",
        headers: await getAuthHeader,
    });
};

export const getCategories = async(
    page = 0,
    size = 20,
    sort = "category_id",
    type = "asc"
) =>{
    const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;
    return fetch(`${API_URL}/categories/?${qs}`, {
		method: "get",
        headers: await getAuthHeader(),
	}); 
};

export const getCategoryPropertyKey = async(id) =>{
    return fetch(`${API_URL}/categories/${id}/properties`,{
        method:"get",
        headers: await getAuthHeader(),
    });
};

export const createNewAdvert = async(payload) => {
    return fetch(`${API_URL}/adverts`,{
        method:"post",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type": "application/json",
        },
    });
};
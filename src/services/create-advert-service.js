import { config } from "@/helpers/config";
import { getAuthHeader } from "@/helpers/auth";

const API_URL = config.api.baseUrl;

//* T01
export const getAllAdvertType = async () => {
  return fetch(`${API_URL}/advert-types`, {
    method: "GET",
    headers: await getAuthHeader(),
  });
};

//* U01
export const getAllCountries = async () => {
  return fetch(`${API_URL}/countries`, {
    method: "GET",
  });
};
//* U02
export const getAllCities = async () => {
  return fetch(`${API_URL}/cities`, {
    method: "GET",
  });
};
//* U03
export const getAllDistricts = async () => {
  return fetch(`${API_URL}/districts`, {
    method: "GET",
  });
};
//* C01
export const getCategories = async (
  page = 0,
  size = 20,
  sort = "category_id1",
  type = "asc"
) => {
  const qs = `?page=${page}&size=${size}&sort=${sort}&type=${type}`;
  return fetch(`${API_URL}/categories${qs}`, {
    headers: await getAuthHeader(),
  });
};
//* C07
export const getPropertyKey= async(id) =>{
  return fetch(`${API_URL}/categories/${id}/properties`, {
    headers: await getAuthHeader(),
  });
}
//* A10
export const createNewAdvert = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/adverts`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new error(`Network response was not ok`);
    }
    return response.json();
  } catch (error) {
    console.error(
      "There was a porblem with your createNewAdvertService",
      error
    );
    throw error;
  }
};

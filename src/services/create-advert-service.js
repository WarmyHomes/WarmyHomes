import { config } from "@/helpers/config";
import { getAuthHeader } from "@/helpers/auth";

const API_URL = config.api.baseUrl;

//* A05
export const getMyAdverts = async (
  page = 0,
  size = 20,
  sort = "category_id",
  type = "asc"
) => {
  const qs = `?page=${page}&size=${size}&sort=${sort}&type=${type}`;
  return fetch(`${API_URL}/adverts/auth${qs}`, {
    headers: await getAuthHeader(),
  });
};

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
export const getPropertyKey = async (id) => {
  return fetch(`${API_URL}/categories/${id}/properties`, {
    headers: await getAuthHeader(),
  });
};

//* A08
export const getAdvertById = async (id) => {
  return fetch(`${API_URL}/adverts/${id}/auth`, {
    headers: await getAuthHeader(),
  });
};


//* A10
export const createNewAdvert = async (formData) => {
  console.log("FormData::>>>>>>>>>>>>", formData);
  try {
    const response = await fetch(`${API_URL}/adverts`, {
      method: "POST",
      headers: await getAuthHeader(),
      headers: await getAuthHeader(),
			body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }

    return response.json();
  } catch (error) {
    console.error(
      "There was a problem with your createNewAdvertService",
      error
    );
    throw error;
  }
};




//* S05
export const createNewTourRequest = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/tour-requests`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers:  await getAuthHeader(),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
    return response.json();
  } catch (error) {
    console.error(
      "There was a porblem with your createNewTourRequest",
      error
    );
    throw error;
  }
};



// A-01

export const allAdvertsQueryByPage = async (params = {}) => {



  const queryParams = new URLSearchParams({
    q: params.query || '',
    category_id: params.category_id || '',
    advert_type_id: params.advert_type_id || '',
    price_start: params.price_start || '',
    price_end: params.price_end || '',
    city_id: params.city_id || '',
    page: params.page || 0,
    size: params.size || 20,
    sort: params.sort || 'id',
    type: params.type || 'asc'
  });

  const response = await fetch(`${API_URL}/adverts?${queryParams.toString()}`, {
    method: 'GET',
   
  });

  return response;
};

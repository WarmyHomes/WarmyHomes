import {getAuthHeader} from "@/helpers/auth";
import {config} from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getTourRequestWithId = async (id) => {
  return fetch (`${API_URL}/tour-request/${id}/auth`,{
    method:"get",
    body: await getAuthHeader(),
  });
};


export const deleteTourRequestWithId = async(id) => {
  return fetch(`${API_URL}/tour-request/${id}`,{
    method: "delete",
    headers: await getAuthHeader(),
  });
};

export const getAllTourRequestWithPage = async(
  page = 0,
	size = 20,
	sort = "tour_date",
	type = "asc"
) => {
    const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;
    return fetch(`${API_URL}/tour-requests/admin${qs}`, {
      headers: await getAuthHeader(),
    });
}

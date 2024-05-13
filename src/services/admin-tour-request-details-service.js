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

export const getAllTourRequestWithPage = async(payload) => {
    return fetch(`${API_URL}/tour-requests/admin`, {
      method: "get",
      headers: await getAuthHeader(),
      body: JSON.stringify(payload)
    });
}

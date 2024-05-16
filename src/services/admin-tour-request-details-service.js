import {getAuthHeader} from "@/helpers/auth";
import {config} from "@/helpers/config";
import { convertFormDataToJson } from "@/helpers/form-validation";

const API_URL = config.api.baseUrl;

export const getTourRequestWithId = async (id) => {
  const header = await getAuthHeader();
  return fetch (`${API_URL}/tour-request/${id}/auth`,{
    method:"GET",
    headers: header,
  });
};

export const deleteTourRequestWithId = async (id) => {
  try{
    const response = await fetch(`${API_URL}/tour-requests/${id}`,{
      method: "DELETE",
      headers: await getAuthHeader(),
    });
    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message|| 'Error occurred');
    }
    return response.json();
  }catch(error){
    console.error("API Error", error);
    throw new Error(error.message|| 'Error occurred while deleting the tour request');
  }
};

export const updateTourRequest = async( payload ) => {
  return fetch (`${API_URL}/tour-requests/${payload.id}/auth`,{
    method: "PUT",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload)
  });
}; 

export const getAllTourRequestWithPage = async(payload) => {
    return fetch(`${API_URL}/tour-requests/admin`, {
      method: "get",
      headers: await getAuthHeader(),
      body: JSON.stringify(payload)
    });
}

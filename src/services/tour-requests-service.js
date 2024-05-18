import {getAuthHeader} from "@/helpers/auth";
import {config} from "@/helpers/config";
import { convertFormDataToJson } from "@/helpers/form-validation";

const API_URL = config.api.baseUrl;

export const getUsersAllTourRequests = async (
  page = 0,
  size = 20,
  sort = "tour_date",
  type = "asc"
) =>{
  const qs =`?page=${page}&size=${size}&sort=${sort}&type=${type}`;
  return fetch(`${API_URL}/tour-requests/auth${qs}`,{
    headers : await getAuthHeader(),
  }) 
};

export const deleteUsersTourRequest = async (id) =>{
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
}

export const getUsersTourRequestDetails = async (id) =>{
  try {
    const response = await fetch(`${API_URL}/tour-requests/${id}/auth`, {
      method: "GET",
      headers: await getAuthHeader(),
    });

    if (!response.ok) {
      throw new Error('Error occurred while fetching tour details.');
    }

    return response; 
  } catch (err) {
    console.error("API ERROR", err);
    throw new Error('An error occurred while fetching tour details. Please try again later.');
  }
}
  


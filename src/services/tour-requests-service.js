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
  


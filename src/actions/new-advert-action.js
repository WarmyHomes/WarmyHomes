import { createNewAdvert, createNewTourRequest } from "@/services/create-advert-service";

export const createNewAdvertAction = async (formData) => {
  try {
    const result = await createNewAdvert(formData);
    return result;
  } catch (error) {
    console.error('There was a problem with your createNewAdvertAction:', error);
    throw error;
  }
};


export const createNewTourRequestsAction = async (formData) => {
  try {
    const result = await createNewTourRequest(formData);
    return result;
  } catch (error) {
    console.error('There was a problem with your createNewTourRequestAction:', error);
    throw error;
  }
};
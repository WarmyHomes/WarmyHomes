import { createNewAdvert } from "@/services/create-advert-service";

export const createNewAdvertAction = async (formData) => {
  try {
    const result = await createNewAdvert(formData);
    return result;
  } catch (error) {
    console.error('There was a problem with your createNewAdvertAction:', error);
    throw error;
  }
};
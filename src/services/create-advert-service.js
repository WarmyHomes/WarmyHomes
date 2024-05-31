import { config } from "@/helpers/config";


const API_URL = config.api.baseUrl;

export const createNewAdvert = async (formData) => {
  try{
    const response = await fetch (`${API_URL}/create-new-advert`,{
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/json',
      },
    });
    if(!response.ok){
      throw new error(`Network response was not ok`);
    }
    return response.json();
  }catch(error){
    console.error('There was a porblem with your createNewAdvertService',error);
    throw error;
  }
};
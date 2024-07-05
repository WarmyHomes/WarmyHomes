import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const uploadImages = async (advertId, formData) => {
  try {
    console.log("İmageData>>>>ser: ", formData);

    const response = await fetch(`${API_URL}/images/${advertId}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Resimler yüklenirken bir hata oluştu.');
    }

    const data = await response.json();
    return data.uploadedImageIds;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

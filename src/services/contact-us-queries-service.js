import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const createNewContactUsQuery = (payload) => {
  return fetch(`${API_URL}/contact-us-queries`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

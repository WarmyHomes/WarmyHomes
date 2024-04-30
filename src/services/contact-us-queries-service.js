import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const createNewContactUsQuery = async (payload) => {
  console.log(payload, "payload");
  return await fetch(`${API_URL}/contact-us-queries`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

// X01

export const resetDatabaseService = async () => {
  return fetch(`${API_URL}/settings/db-reset`, {
    method: "delete",
    headers: await getAuthHeader(),
  });
};

"use server";

import {
  getYupErrors,
  convertFormDataToJson,
  response,
} from "@/helpers/form-validation";
import { createNewAdvert } from "@/services/new-advert-service";
import {config} from "@/helpers/config";
import { getAuthHeader } from "@/auth";
import * as Yup from "yup";

const FormSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  advertType: Yup.mixed().required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  neighbourhood: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  floor: Yup.string().required("Required"),
  bedroom: Yup.string().required("Required"),
  bathroom: Yup.string().required("Required"),
  garage: Yup.string().required("Required"),
  yearOfBuilt: Yup.string().required("Required"),
  size: Yup.string().required("Required"),
  images: Yup.array().min(1, "At least one image is required"),
});

export const createNewAdvertAction = async (prevState, formData) => {
const API_URL = config.api.baseUrl;
  try {
    const response = await fetch(`${API_URL}/create-new-advert`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        ...getAuthHeader(),
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("There was a problem with your createNewAdvertAction:", error);
    throw error;
  }
};

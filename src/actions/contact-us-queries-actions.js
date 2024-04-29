"use server";

import {
  convertFormDataToJson,
  getYupErrors,
  response,
} from "@/helpers/form-validation";
import { createNewContactUsQuery } from "@/services/contact-us-queries-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export const createContactUsQueryAction = async (prevState, formData) => {
  const required = ["firstName", "lastName", "email", "message"];
  try {
    const form = new FormData();
    required.forEach((key) => form.append(key, formData.get(key)));

    const fields = convertFormDataToJson(form);
    console.log(fields, "fileds");

    FormSchema.validateSync(fields, { abortEarly: false });

    const res = await createNewContactUsQuery(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, "", data?.validations);
    }

    return response(true, "Query saved successfully!", {});
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getYupErrors(err.inner);
    }
    console.log(err, "erro");
  }
};

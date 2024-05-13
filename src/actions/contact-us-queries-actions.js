"use server";

import {
  convertFormDataToJson,
  getYupErrors,
  response,
} from "@/helpers/form-validation";
import { createNewContactUsQuery, deleteContactMessage } from "@/services/contact-us-queries-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	first_name: Yup.string().required("Required"),
	last_name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	message: Yup.string().required("Required"),
  });
  

export const createContactUsQueryAction = async (prevState, formData) => {
	const required = ["first_name", "last_name", "email", "message"];
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
  

export const deleteContactMessageAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteContactMessage(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/admin/contact-message");
	redirect(`/admin/contact-messages?msg=${encodeURI("Message was deleted")}`);
};

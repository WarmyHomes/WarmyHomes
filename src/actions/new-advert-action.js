"use server";

import { getYupErrors, response } from "@/helpers/form-validation";
import { createNewAdvert } from "@/services/create-advert-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; // Doğru modülün kullanıldığından emin olun
import * as Yup from "yup";

const FormSchema = Yup.object({
  title: Yup.string().required("Required")
});

export const createNewAdvertAction = async (formData) => {
  try {
  //  console.log("formData:", formData);

    // Form verilerini doğrula
    FormSchema.validateSync(formData, { abortEarly: false });

    // Yeni ilan oluştur
    const res = await createNewAdvert(formData); 
    const data = await res.json();

    if (!res.ok) {
      return response(false, data?.message, data?.validations);
    }

    console.log("response>>>",data);
    // Sayfayı yeniden doğrula ve yönlendir
    await revalidatePath("/"); // Bu satırın async olmasına dikkat edin
    return redirect(`/new-advert/${data.object.id}`); // Ana sayfaya yönlendirme
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getYupErrors(err.inner);
    }

    throw err;
  }
};




export const createNewTourRequestsAction = async (formData) => {
  try {
    const result = await createNewTourRequest(formData);
    return result;
  } catch (error) {
    console.log('error', error)
    console.error('There was a problem with your createNewTourRequestAction:', error);
    throw error;
  }
};
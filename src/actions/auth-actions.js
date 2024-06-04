"use server";

import { signIn } from "@/auth";
import { convertFormDataToJson, getYupErrors, response } from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";
 
const FormSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
    // .min(8, "Must be at least 8 chars")
    // .matches(/[a-z]+/, "At least one lowercase")
    // .matches(/[A-Z]+/, "At least one uppercase")
    // .matches(/\d+/, "At least one number")
    .required("Required"),});

export const loginAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData);

    try {
        FormSchema.validateSync(fields, { abortEarly: false});

        await signIn("credentials", fields);



    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
        else if(err instanceof AuthError){
            
            if(err.type==='CredentialsSignin'){
                return response(false, 'Invalid credentials')
            }
            // satir eklendi
            return response(false, 'Something went wrong.')
        }
        // satir eklendi
		throw (err);
    }

}
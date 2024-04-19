"use server"

import { convertFormDataToJson,
getYupErrors,
response,
 } from "@/helpers/form-validation"
import { createAdvertMessage } from "@/services/create-advert-service";
import * as Yup from "yup";

const FormSchema = Yup.object({
    title:Yup.string.required("Required"),
    description:Yup.string.required("Required"),
    price:Yup.integer.required("Required"),
    advertType:Yup.string.required("Required"),
    country:Yup.string.required("Required"),
    city:Yup.string.required("Required"),
    neigbourhood:Yup.string.required("Required"),
    location:Yup.string.required("Required"),
    category:Yup.string.required("Required"),
    floor:Yup.string.required("Required"),
    bedroom:Yup.string.required("Required"),
    bathroom:Yup.string.required("Required"),
    garage:Yup.string.required("Required"),
    yearofbuilt:Yup.string.required("Required"),
    size:Yup.string.required("Required"),
    images:Yup.string.required("Required"),
});


export const createAdvertAction = async(prevState, FormData) =>{
    try{
        const fields = convertFormDataToJson(FormData);
        FormSchema.validateSync(fields,{abortEarly:false});
        const res = await createAdvertMessage(fields);
        const data = await res.json();

        if(!res.ok){
            return response(false, "", data?.validations);
        }
        return response(true,"advert created successfully. ::chance on create-advert-action::");

    }catch(err){
        if(err instanceof Yup.ValidationError){
            return getYupErrors(err.inner);
        }
        throw err;
    }
    
};
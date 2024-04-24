"use server"
import { getYupErrors, convertFormDataToJson, response } from "@/helpers/form-validation";
import { createNewAdvert } from "@/services/new-advert-service";

import * as Yup from "yup";

const FormSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price : Yup.number().required("Required"),
    advertType :Yup.mixed().required("Required"),
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
    images: Yup.mixed().required("Required"),
});

export const createNewAdvertAction = async(prevState,fromData) =>{
    try{
        const fileds = convertFormDataToJson(FormData);
        FormSchema.validateSync(fileds, {abortEarly:false});
        
        const res = await createNewAdvert(fileds);
        const data = await res.json();

        if(!res.ok){
            return response (false, "" ,data?.validations);
        }
        
        return response (true, "Your advert Created Successfully");
    } catch(err){
        if(err instanceof Yup.ValidationError){
            return getYupErrors(err.inner);
        }
        throw err;
    }
};
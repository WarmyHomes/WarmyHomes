"use client";

import { createRegisterAction, deleteUserAction } from "@/actions/user-actions";
import { useFormState } from "react-dom";
import "./profile-form.scss";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import InputMask from "react-input-mask-next";
import SubmitButton from "@/components/common/submit-button/submit-button";
const UserEdit = (data) => {
	const [state, dispatch] = useFormState(
        createRegisterAction, 
        initialResponse);

        const handleDelete = async () => {
            await deleteUserAction(data.data.object.id);
            // Silme işlemi sonrası bir yönlendirme veya bildirim ekleyebilirsiniz
        }

        console.log("User data:>>>>",data)
    
	return (
        <div className="container profile-form">
        <div className="row justify-content-center ">
            <div className="col-md-8 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        
                        <form action={dispatch} noValidate>
                            <div
                                className={`form-floating mb-3 `}
                            >
                                <input
                                    type="text"
                                    className={`form-control ${isInvalid(
                                        state?.errors?.first_name
                                    )}`}
                                    id="first_name"
                                    name="first_name"
                                    placeholder="first_name"
                                    defaultValue={data.data.object.first_name}
                                />
                                <label htmlFor="first_name">First Name</label>
                                <div className="invalid-feedback">
                                    {state?.errors?.first_name}
                                </div>
                            </div>
                            <div
                                className={`form-floating mb-3 `}
                            >
                                <input
                                    type="text"
                                    className={`form-control ${isInvalid(
                                        state?.errors?.last_name
                                    )}`}
                                    id="last_name"
                                    name="last_name"
                                    placeholder="last_name"
                                    defaultValue={data.data.object.last_name}
                                />
                                <label htmlFor="last_name">
                                Last Name
                                </label>
                                
                            </div>
                            <div
                                className={`form-floating mb-3 `}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    defaultValue={data.data.object.email}
                                    
                                />
                                <label htmlFor="email">
                                Email
                                </label>
                                
                            </div>
                            

                            <div
                                className={`form-floating mb-3`}
                            >
                                <InputMask
                                    className={`form-control ${isInvalid(
                                        state?.errors?.phone
                                    )}`}
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    mask="9999999999"
                                    defaultValue={data.data.object.phone}
                                />
                                <label htmlFor="phone">	
                                Phone
                                </label>
                                
                            </div>


                            <div
                                className={`form-floating mb-3`}
                            >
                                <InputMask
                                    className={`form-control ${isInvalid(
                                        state?.errors?.password_hash
                                    )}`}
                                    id="password_hash"
                                    name="password_hash"
                                    placeholder="password_hash"
                                  
                                    defaultValue={data.data.object.password_hash}
                                />
                                <label htmlFor="password_hash">	
                                Password
                                </label>
                                
                            </div>

                            <button type="button" onClick={handleDelete} className="btn btn-danger">
                                    Delete
                                </button>
                            <SubmitButton title="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
export default UserEdit;

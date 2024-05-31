"use client";

import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";


import CancelButton from "@/components/common/form-fields/cancel-button";
import { useFormState } from "react-dom";
import { updateAdvertTypeAction } from "@/actions/advert-type-action";


const AdvertTypeEdit = ({ data }) => {
	

    // Form durumunu ve işlemlerini yönetmek için useFormState kancını kullanıyoruz
    const [state, dispatch] = useFormState(
        updateAdvertTypeAction, // form gönderme işlemlerini yapan eylem (action)
        initialResponse // form durumunun başlangıç değeri
    );



    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Title</div>

                    {state?.message ? (
                        <div className="alert alert-danger">
                            {state.message}
                        </div>
                    ) : null}

                    <form action={dispatch} noValidate>
                        <input type="hidden" name="userId" value={data.id} />
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
                                            state.errors?.name
                                        )}`}
                                        id="title"
                                        name="title"
                                        placeholder="title"
                                        defaultValue={data.title}
                                    />
                                    <label htmlFor="title">Title</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.name}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <CancelButton />
                            <SubmitButton title="Update" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdvertTypeEdit;

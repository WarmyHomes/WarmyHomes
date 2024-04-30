"use client"
import React, { useState } from 'react';
import "./advert-type-from.scss"
import { createAdvertTypeAction } from '@/actions/advert-type-action';
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { useFormState } from "react-dom";


// Yeni reklam türü oluşturma bileşeni
const AdvertTypeNew = () => {

    // Form durumunu ve işlemlerini yönetmek için useFormState kancını kullanıyoruz
    // Bu noktada updateAdvertType ve initialResponse'un tanımlanması gerekiyor

    // State ve dispatch fonksiyonunu kullanarak form durumunu yönetiyoruz
    const [state, dispatch] = useFormState(
      createAdvertTypeAction, // Form gönderme işlemlerini yapan eylem (action)
        initialResponse // Form durumunun başlangıç değeri
    );

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Title</div>

                    {/* Hata mesajı varsa göster */}
                    {state?.message ? (
                        <div className="alert alert-danger">
                            {state.message}
                        </div>
                    ) : null}

                    <form action={dispatch} noValidate> {/* Form gönderildiğinde dispatch fonksiyonunu çağırır */}
                        <input type="hidden" name="userId"  /> {/* Kullanıcı kimliğini gizli bir şekilde gönderir */}
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-1">
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
                                       
                                    />
                                    <label htmlFor="title">Title</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.name}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                          
                            <SubmitButton  id="button" title="Create" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdvertTypeNew; // Bileşeni dışa aktarır

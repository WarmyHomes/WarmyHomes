"use client"
import React, { useState } from 'react';

import { initialResponse, isInvalid } from "@/helpers/form-validation";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { useFormState } from "react-dom";
import { createCategoriesAction } from '@/actions/categories-action';


// Yeni reklam türü oluşturma bileşeni
const CategoriesNew = () => {

    // Form durumunu ve işlemlerini yönetmek için useFormState kancını kullanıyoruz
    // Bu noktada updateAdvertType ve initialResponse'un tanımlanması gerekiyor

    // State ve dispatch fonksiyonunu kullanarak form durumunu yönetiyoruz
    const [state, dispatch] = useFormState(
      createCategoriesAction, // Form gönderme işlemlerini yapan eylem (action)
        initialResponse // Form durumunun başlangıç değeri
    );

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Category</div>

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
                                
                                <h4>Title</h4>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
                                            state.errors?.title
                                        )}`}
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                    />
                                    <label htmlFor="title">Title</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.title}
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <h4>Icon</h4>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
                                            state.errors?.icon
                                        )}`}
                                        id="icon"
                                        name="icon"
                                        placeholder="Icon"
                                    />
                                    <label htmlFor="icon">Icon</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <h4>Sequence</h4>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
                                            state.errors?.seq
                                        )}`}
                                        id="seq"
                                        name="seq"
                                        placeholder="Sequence"
                                    />
                                    <label htmlFor="seq">Sequence</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.seq}
                                    </div>
                                </div>
                            </div>

                            <div className="col">
								<div className="form-check">
									<input
										className="form-check-input alert-danger"
										type="checkbox"
										id="is_active"
										name="is_active"
										value={true}
									/>
									<label
										className="form-check-label"
										htmlFor="is_active"
									>
										Active
									</label>
								</div>
							</div>

                            <div className="col">
                                <h4>Properties</h4>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
                                            state.errors?.category_property_keys
                                        )}`}
                                        id="category_property_keys"
                                        name="category_property_keys"
                                        placeholder="Properties"
                                    />
                                    <label htmlFor="category_property_keys">Properties</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.category_property_keys}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <SubmitButton id="button" title="Create" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CategoriesNew; // Bileşeni dışa aktarır

"use client";

import React, { useState } from 'react';
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import { createCategoriesAction } from '@/actions/categories-action';

const CategoriesNew = () => {
    const [state, dispatch] = useFormState(
        createCategoriesAction,
        initialResponse
    );

    const [isActive, setIsActive] = useState(false);
    const [categoryPropertyKeys, setCategoryPropertyKeys] = useState([]);

    const handleAddProperty = () => {
        setCategoryPropertyKeys([...categoryPropertyKeys, '']);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch();
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">New</div>

                    {state?.message && (
                        <div className="alert alert-danger">
                            {state.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                                <h6>Title</h6>
                                <div className="form-floating mb-6">
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
                                <h6>Sequence</h6>
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className={`form-control ${isInvalid(
                                            state.errors?.seq
                                        )}`}
                                        id="seq"
                                        name="seq"
                                        placeholder="Sequence"
                                        min={1}
                                        max={100}
                                    />
                                    <label htmlFor="seq">Sequence</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.seq}
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <h6>Icon</h6>
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
                        </div>

                        <div className="row">
                            <div className="col">
                                <h6>Category Property Keys</h6>
                                <ul>
                                    {categoryPropertyKeys.map((property, index) => (
                                        <li key={index}>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control`}
                                                    id={`category_property_key_${index}`}
                                                    name={`category_property_keys[${index}].name`}
                                                    placeholder={`Property ${index + 1}`}
                                                />
                                                <label htmlFor={`category_property_key_${index}`}>Property {index + 1}</label>
                                                <div className="invalid-feedback">
                                                    {state.errors?.category_property_keys}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <button type="button" className="btn btn-primary" onClick={handleAddProperty}>
                                    Add Property
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
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
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <CancelButton />
                            <SubmitButton title="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoriesNew;

"use client";

import React, { useState } from 'react';
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import { createCategoriesAction } from '@/actions/categories-action';
import './categories-new.scss';

const CategoriesEdit = ({ data }) => {

    console.log("CategoryDaa>>>>>>>",data)
    const [state, dispatch] = useFormState(
        createCategoriesAction, // Form gönderme işlemlerini yapan eylem (action)
        initialResponse // Form durumunun başlangıç değeri
    );

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [seq, setSeq] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [newProperty, setNewProperty] = useState('');
    const [properties, setProperties] = useState(['Bedroom', 'Bathroom']);

    const handleAddProperty = () => {
        if (newProperty.trim() !== '') {
            setProperties([...properties, newProperty]);
            setNewProperty('');
        }
    };

    const handleDeleteProperty = (property) => {
        setProperties(properties.filter(p => p !== property));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('icon', icon);
        formData.append('seq', seq);
        formData.append('is_active', isActive);
        formData.append('category_property_keys', JSON.stringify(properties.map(property => ({ name: property }))));

        dispatch(formData);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">New Category</div>

                    {state?.message ? (
                        <div className="alert alert-danger">
                            {state.message}
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} noValidate>
                        <input type="hidden" name="userId" />

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${isInvalid(state.errors?.title)}`}
                                id="title"
                                name="title"
                                placeholder="Title"
                                defaultValue={data.title}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label htmlFor="title">Title</label>
                            <div className="invalid-feedback">
                                {state.errors?.title}
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${isInvalid(state.errors?.icon)}`}
                                id="icon"
                                name="icon"
                                placeholder="Icon"
                                defaultValue={data.icon}
                                value={icon}
                                onChange={(e) => setIcon(e.target.value)}
                            />
                            <label htmlFor="icon">Icon</label>
                            <div className="invalid-feedback">
                                {state.errors?.icon}
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className={`form-control ${isInvalid(state.errors?.seq)}`}
                                id="seq"
                                name="seq"
                                placeholder="Sequence"
                                defaultValue={data.seq}
                                value={seq}
                                onChange={(e) => setSeq(e.target.value)}
                            />
                            <label htmlFor="seq">Sequence</label>
                            <div className="invalid-feedback">
                                {state.errors?.seq}
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <div className="status-toggle">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        name="is_active"
                                        defaultValue={data.isActive}
                                        checked={isActive}
                                        onChange={(e) => setIsActive(e.target.checked)}
                                    />
                                    <span className="slider"></span>
                                </label>
                                <label htmlFor="is_active">Active</label>
                            </div>
                        </div>

                        <div className="form-floating mb-3 properties">
                            <label>Properties</label>
                            <div className="property-input">
                                <input
                                    type="text"
                                    value={newProperty}
                                    defaultValue={data.category_property_keys}
                                    onChange={(e) => setNewProperty(e.target.value)}
                                />
                                <button type="button" onClick={handleAddProperty}>+</button>
                            </div>
                            <ul>
                                {properties.map((property, index) => (
                                    <li key={index}>
                                        {property}
                                        <button type="button" onClick={() => handleDeleteProperty(property)}>🗑️</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <CancelButton id="button-cancel" title="Cancel" />
                            <SubmitButton id="button-submit" title="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoriesEdit

"use client";
import { useState } from "react";
import { changePasswordAction } from "@/actions/user-actions";
import "./change-password-form.scss";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChangePasswordForm = () => {
    const [state, dispatch] = useFormState(changePasswordAction, initialResponse);
    const [currentPasswordType, setCurrentPasswordType] = useState("password");
    const [newPasswordType, setNewPasswordType] = useState("password");
    const [retryPasswordType, setRetryPasswordType] = useState("password");

    const toggleCurrentPasswordVisibility = () => {
        setCurrentPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    const toggleNewPasswordVisibility = () => {
        setNewPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    const toggleRetryPasswordVisibility = () => {
        setRetryPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="container change-password-form">
            <div className="row justify-content-center ">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <form action={dispatch} noValidate>
                                <div className={`form-floating mb-3`}>
                                    <input
                                        type={currentPasswordType}
                                        className={`form-control ${isInvalid(
                                            state?.errors?.reset_password_codee
                                        )}`}
                                        id="reset_password_codee"
                                        name="reset_password_codee"
                                    />
                                    <label htmlFor="reset_password_codee">Current Password</label>
                                    <span
                                        className="password-toggle-icon"
                                        onClick={toggleCurrentPasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={currentPasswordType === "password" ? faEye : faEyeSlash} />
                                    </span>
                                </div>
                                <div className={`form-floating mb-3`}>
                                    <input
                                        type={newPasswordType}
                                        className={`form-control ${isInvalid(
                                            state?.errors?.password_hash
                                        )}`}
                                        id="password_hash"
                                        name="password_hash"
                                    />
                                    <label htmlFor="password_hash">New Password</label>
                                    <span
                                        className="password-toggle-icon"
                                        onClick={toggleNewPasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={newPasswordType === "password" ? faEye : faEyeSlash} />
                                    </span>
                                </div>
                                <div className={`form-floating mb-3`}>
                                    <input
                                        type={retryPasswordType}
                                        className={`form-control ${isInvalid(
                                            state?.errors?.retry_password_hash
                                        )}`}
                                        id="retry_password_hash"
                                        name="retry_password_hash"
                                    />
                                    <label htmlFor="retry_password_hash">Retry New Password</label>
                                    <span
                                        className="password-toggle-icon"
                                        onClick={toggleRetryPasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={retryPasswordType === "password" ? faEye : faEyeSlash} />
                                    </span>
                                </div>
                                <SubmitButton title="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordForm;

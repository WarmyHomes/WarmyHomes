"use client";
import { useState } from "react";
import { resetPasswordAction } from "@/actions/user-actions";
import "./reset-password.scss";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ResetPasswordForm = () => {
    const [state, dispatch] = useFormState(resetPasswordAction, initialResponse);
    const [passwordType, setPasswordType] = useState("password");
    const [retryPasswordType, setRetryPasswordType] = useState("password");

    const togglePasswordVisibility = () => {
        setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    const toggleRetryPasswordVisibility = () => {
        setRetryPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="container reset-password-form">
            <div className="row justify-content-center ">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <form action={dispatch} noValidate>
                                <div className={`form-floating mb-3`}>
                                    <input
                                        type="password"
                                        className={`form-control ${isInvalid(
                                            state?.errors?.reset_password_codee
                                        )}`}
                                        id="reset_password_codee"
                                        name="reset_password_codee"
                                    />
                                    <label htmlFor="reset_password_codee">
                                        Reset Code
                                    </label>
                                </div>
                                <div className={`form-floating mb-3`}>
                                    <input
                                        type={passwordType}
                                        className={`form-control ${isInvalid(
                                            state?.errors?.password_hash
                                        )}`}
                                        id="password_hash"
                                        name="password_hash"
                                    />
                                    <label htmlFor="password_hash">New Password</label>
                                    <span
                                        className="password-toggle-icon"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={passwordType === "password" ? faEye : faEyeSlash} />
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
                                <SubmitButton title="RESET PASSWORD" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;

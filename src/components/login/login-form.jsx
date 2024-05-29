"use client";
import { useState } from "react";
import { loginAction } from "@/actions/auth-actions";
import "./login-form.scss";
import { useFormState } from "react-dom";
import { initialResponse } from "@/helpers/form-validation";
import SubmitButton from "../common/form-fields/submit-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    const [state, dispatch] = useFormState(loginAction, initialResponse);
    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordVisibility = () => {
        setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="container login-form">
            <div className="row justify-content-center ">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5>Please enter your email and password!</h5>
                            {!state.success && state.message ? (
                                <div className="alert alert-danger">
                                    {state.message}
                                </div>
                            ) : (
                                ""
                            )}
                            <form action={dispatch} noValidate>
                                <div
                                    className={`form-floating mb-3 ${
                                        state?.errors?.email ? "is-invalid" : ""
                                    }`}
                                >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        defaultValue="deneme@github.com"
                                    />
                                    <label htmlFor="email">Enter your email</label>
                                    <div className="invalid-feedback">
                                        {state?.errors?.email}
                                    </div>
                                </div>

                                <div
                                    className={`form-floating mb-3 ${
                                        state?.errors?.password ? "is-invalid" : ""
                                    }`}
                                >
                                    <input
                                        type={passwordType}
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        defaultValue="123456789"
                                    />
                                    <label htmlFor="password">Enter your password</label>
                                    <div className="invalid-feedback">
                                        {state?.errors?.password}
                                    </div>
                                    <span
                                        className="password-toggle-icon"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={passwordType === "password" ? faEye : faEyeSlash} />
                                    </span>
                                </div>

                                <a href="forgot-password"><h6>Forgot password?</h6></a>
                                <SubmitButton className="button">Login</SubmitButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

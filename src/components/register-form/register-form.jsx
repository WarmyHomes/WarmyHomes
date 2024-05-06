"use client";

import { createRegisterAction } from "@/actions/user-actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import "./register-form.scss";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import InputMask from "react-input-mask-next";

const RegisterForm = () => {
	const [state, dispatch] = useFormState(createRegisterAction, initialResponse);

	return (
		<div className="container register-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<form action={dispatch} noValidate>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
											state.errors?.firstname
										)}`}
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                    />
                                    <label htmlFor="firstname">First Name</label>
									<div className="invalid-feedback">
										{state.errors?.firstname}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
											state.errors?.lastname
										)}`}
                                        id="lastname"
                                        name="lastname"
										placeholder="Last Name"
                                    />
                                    <label htmlFor="lastname">Last Name</label>
									<div className="invalid-feedback">
										{state.errors?.lastname}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <InputMask
									className={`form-control ${isInvalid(
											state.errors?.phone
										)}`}
                                        id="phone"
                                        name="phone"
										placeholder="Phone number"
										mask="999-999-9999"
                                        
                                    />
                                    <label htmlFor="phone">Phone</label>
									<div className="invalid-feedback">
										{state.errors?.phone}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
											state.errors?.email
										)}`}
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="email">Email</label>
									<div className="invalid-feedback">
										{state.errors?.email}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className={`form-control ${isInvalid(
											state.errors?.password
										)}`}
                                        id="password"
                                        name="password"
										placeholder="Password"
                                    />
                                    <label htmlFor="password">Password</label>
									<div className="invalid-feedback">
										{state.errors?.password}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
										className={`form-control ${isInvalid(
											state.errors?.confirmPassword
										)}`}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                    />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
									<div className="invalid-feedback">
										{state.errors?.confirmPassword}
									</div>
                                </div>
								<div>
                                <SubmitButton title="Register" />
                                <h6>If you already have an account. <Link href="/login">Login now!</Link>{" "}</h6>
								</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;

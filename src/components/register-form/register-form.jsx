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

    console.log("State>>>>>>>>>",state)
    
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
											state.errors?.first_name
										)}`}
                                        id="first_name"
                                        name="first_name"
                                        placeholder="first_name"
                                    />
                                    <label htmlFor="first_name">First Name</label>
									<div className="invalid-feedback">
										{state.errors?.first_name}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${isInvalid(
											state.errors?.last_name
										)}`}
                                        id="last_name"
                                        name="last_name"
										placeholder="Last Name"
                                    />
                                    <label htmlFor="last_name">Last Name</label>
									<div className="invalid-feedback">
										{state.errors?.last_name}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <InputMask
									className={`form-control ${isInvalid(
											state.errors?.phone
										)}`}
                                        id="phone"
                                        name="phone"
										placeholder="phone"
										mask="9999999999"
                                        
                                    />
                                    <label htmlFor="phone">Phone</label>
									<div className="invalid-feedback">
										{state.errors?.phone}
									</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
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
											state.errors?.password_hash
										)}`}
                                        id="password_hash"
                                        name="password_hash"
										placeholder="password_hash"
                                    />
                                    <label htmlFor="password_hash">Password</label>
									<div className="invalid-feedback">
										{state.errors?.password_hash}
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

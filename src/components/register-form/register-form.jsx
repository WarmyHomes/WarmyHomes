"use client";
import { createAdminAction } from "@/actions/admin-actions";
import Link from "next/link";
import "./register-form.scss";
import { initialResponse} from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import InputMask from "react-input-mask-next";

const RegisterForm = () => {
	const [state, dispatch] = useFormState(createAdminAction, initialResponse);


	return (
		<div className="container register-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<form action={dispatch} noValidate>
								<div
									className={`form-floating mb-3 `}
								>
									<input
										type="text"
										className="form-control"
										id="firstname"
										name="firstname"
										
										
									/>
									<label htmlFor="firstname">
                                    First Name
									</label>
									
								</div>
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="text"
										className="form-control"
										id="lastname"
										name="lastname"
										
										
									/>
									<label htmlFor="lastname">
                                    Last Name
									</label>
									
								</div>


								<div
									className={`form-floating mb-3`}
								>
									<InputMask
										
										id="phone"
										name="phone"
										placeholder="Phone"
										mask="999-999-9999"
									/>
									<label htmlFor="phone">	
                                    Phone
									</label>
									
								</div>
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="text"
										className="form-control"
										id="email"
										name="email"
										
										
									/>
									<label htmlFor="email">
                                    Email
									</label>
									
								</div>

                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="number"
										className="form-control"
										id="Password"
										name="Password"
										
										
									/>
									<label htmlFor="Password">
                                    Password
									</label>
									
								</div>

                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="number"
										className="form-control"
										id="Confirm Password"
										name="Confirm Password"
										
										
									/>
									<label htmlFor="Confirm Password">
                                    Confirm Password
									</label>
									
								</div>
                                

                              
								<SubmitButton title="Register" />
								<h6>If you already have an account. <Link href="/login">Login now!</Link> </h6>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;

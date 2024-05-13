"use client";
import Link from "next/link";
import "./profile-form.scss";
import { useFormState } from "react-dom";
import { updateUserAction } from "@/actions/user-actions";
import SubmitButton from "../common/form-fields/submit-button";
import InputMask from "react-input-mask-next";
import { initialResponse, isInvalid } from "@/helpers/form-validation";

const ProfileForm = ({session}) => {
	//console.log("Session>>>>>>>>>",session)
	const [state, dispatch] = useFormState(
		updateUserAction,
		initialResponse
	);
	console.log("State>>>>>>>>>",state)
	return (
		<div className="container profile-form">
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
										className={`form-control ${isInvalid(
											state?.errors?.first_name
										)}`}
                                        id="first_name"
                                        name="first_name"
                                        placeholder="first_name"
										defaultValue={session.user.first_name}
                                    />
                                    <label htmlFor="first_name">First Name</label>
									<div className="invalid-feedback">
										{state?.errors?.first_name}
									</div>
                                </div>
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="text"
										className={`form-control ${isInvalid(
											state?.errors?.last_name
										)}`}
										id="last_name"
										name="last_name"
										placeholder="last_name"
										defaultValue={session.user.last_name}
									/>
									<label htmlFor="last_name">
                                    Last Name
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
										defaultValue={session.user.email}
										
									/>
									<label htmlFor="email">
                                    Email
									</label>
									
								</div>
                                

								<div
									className={`form-floating mb-3`}
								>
									<InputMask
										className={`form-control ${isInvalid(
											state?.errors?.phone
										)}`}
										id="phone"
										name="phone"
										placeholder="Phone"
										mask="9999999999"
										defaultValue={session.user.phone}
									/>
									<label htmlFor="phone">	
                                    Phone
									</label>
									
								</div>
                              
								<SubmitButton title="Update" />
								<h6>If you want to delete your account <Link href="/update">click here!</Link> If you delete your account, all related records with this account will also be deleted permanently.</h6>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;

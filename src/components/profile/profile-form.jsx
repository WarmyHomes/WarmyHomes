"use client";
import Link from "next/link";
import "./profile-form.scss";
import { useFormState } from "react-dom";
import { updateUserAction } from "@/actions/user-actions";
import SubmitButton from "../common/form-fields/submit-button";
import InputMask from "react-input-mask-next";

const ProfileForm = () => {
	const [state, dispatch] = useFormState(
		updateUserAction,
		initialResponse
	);

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
											state.errors?.firstname
										)}`}
										id="firstname"
										name="firstname"
										placeholder="First Name"
										defaultValue={data.first_name}
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
										className={`form-control ${isInvalid(
											state.errors?.lastname
										)}`}
										id="lastname"
										name="lastname"
										placeholder="Last Name"
										defaultValue={data.last_name}
									/>
									<label htmlFor="lastname">
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
										defaultValue={data.email}
										
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
											state.errors?.phone
										)}`}
										id="phone"
										name="phone"
										placeholder="Phone"
										mask="999-999-9999"
										defaultValue={data.phone}
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

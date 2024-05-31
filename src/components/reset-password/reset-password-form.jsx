"use client";
import { resetPasswordAction } from "@/actions/user-actions";
import "./reset-password.scss";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse, isInvalid} from "@/helpers/form-validation";
const ResetPasswordForm= () => {

	const [state, dispatch] = useFormState(
		resetPasswordAction,
		initialResponse
	);

	return (
		<div className="container reset-password-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<form action={dispatch} noValidate>
							<div
									className={`form-floating mb-3 `}
								>
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
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="password"
										className={`form-control ${isInvalid(
											state?.errors?.password_hash
										)}`}
										id="password_hash"
										name="password_hash"
										
										
									/>
									<label htmlFor="password_hash">
                                    New Password
									</label>
									
								</div>


								<div
									className={`form-floating mb-3`}
								>
									<input
										type="password"
										className={`form-control ${isInvalid(
											state?.errors?.retry_password_hash
										)}`}
										id="retry_password_hash"
										name="retry_password_hash"
										
									/>
									<label htmlFor="retry_password_hash">	
                                    Retry New Password
									</label>
									
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

"use client";
import { changePasswordAction } from "@/actions/user-actions";
import "./change-password-form.scss";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse, isInvalid} from "@/helpers/form-validation";

const ChangePasswordForm= () => {
	const [state, dispatch] = useFormState(
		changePasswordAction,
		initialResponse
	);


	return (
		<div className="container change-password-form">
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
											state?.errors?.password_hash
										)}`}
										
										id="password_hash"
										name="password_hash"
										
										
									/>
									<label htmlFor="password_hash">
                                    Current Password
									</label>
									
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

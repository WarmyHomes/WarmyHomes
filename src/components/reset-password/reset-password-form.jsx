"use client";
import { resetPasswordAction } from "@/actions/user-actions";
import "./reset-password.scss";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse} from "@/helpers/form-validation";
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
							<form>
								<div
									className={`form-floating mb-3 `}
								>
									<input
										type="password"
										className="form-control"
										id="resetcode"
										name="resetcode"
										
										
									/>
									<label htmlFor="resetcode">
                                    Reset Code
									</label>
									
								</div>
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="password"
										className="form-control"
										id="newpassword"
										name="newpassword"
										
										
									/>
									<label htmlFor="newpassword">
                                    New Password
									</label>
									
								</div>


								<div
									className={`form-floating mb-3`}
								>
									<input
										type="password"
										className="form-control"
										id="retrynewpassword"
										name="retrynewpassword"
										
									/>
									<label htmlFor="phone">	
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

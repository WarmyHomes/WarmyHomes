"use client";
import "./forgot-password-form.scss";
import { forgotPasswordAction } from "@/actions/user-actions";
import { useFormState } from "react-dom";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse} from "@/helpers/form-validation";

const ForgotPasswordForm = () => {
	const [state, dispatch] = useFormState(
		forgotPasswordAction,
		initialResponse
	);


	return (
		<div className="container forgot-password-form">
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
										id="email"
										name="email"
										
										
									/>
									<label htmlFor="email">
                                    Email
									</label>
									
								</div>

							
								<SubmitButton title="Send Reset Code" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;

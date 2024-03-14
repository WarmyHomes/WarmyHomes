"use client";
import "./forgot-password-form.scss";


const ForgotPasswordForm = () => {



	return (
		<div className="container forgot-password-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<form>
								<div
									className={`form-floating mb-3 `}
								>
									<input
										type="text"
										className="form-control"
										id="email"
										name="email"
										
										
									/>
									<label htmlFor="username">
                                    Email
									</label>
									
								</div>

							
								<button className="button">Send Reset Code</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;

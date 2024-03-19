"use client";
import "./reset-password.scss";


const ResetPasswordForm= () => {



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
                              
								<button className="button">RESET PASSWORD</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordForm;

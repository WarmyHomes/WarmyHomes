"use client";
import "./change-password-form.scss";


const ChangePasswordForm= () => {



	return (
		<div className="container change-password-form">
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
										id="currentpassword"
										name="currentpassword"
										
										
									/>
									<label htmlFor="currentpassword">
                                    Current Password
									</label>
									
								</div>
                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="number"
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
										type="number"
										className="form-control"
										id="retrynewpassword"
										name="retrynewpassword"
										
									/>
									<label htmlFor="phone">	
                                    Retry New Password
									</label>
									
								</div>
                              
								<button className="button">Update</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePasswordForm;

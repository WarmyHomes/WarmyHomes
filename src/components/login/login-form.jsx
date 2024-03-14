"use client";
import "./login-form.scss";


const LoginForm = () => {



	return (
		<div className="container login-form">
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
										id="username"
										name="email"
										
										
									/>
									<label htmlFor="username">
                                    Email
									</label>
									
								</div>

								<div
									className={`form-floating mb-3`}
								>
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										
									/>
									<label htmlFor="password">	
                                    Password
									</label>
									
								</div>
                                <h6>Forgot password?</h6>
								<button className="button">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;

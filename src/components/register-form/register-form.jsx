"use client";
import Link from "next/link";
import "./register-form.scss";


const RegisterForm = () => {



	return (
		<div className="container register-form">
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
										id="firstname"
										name="firstname"
										
										
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
										className="form-control"
										id="lastname"
										name="lastname"
										
										
									/>
									<label htmlFor="lastname">
                                    Last Name
									</label>
									
								</div>


								<div
									className={`form-floating mb-3`}
								>
									<input
										type="phone"
										className="form-control"
										id="phone"
										name="phone"
										
									/>
									<label htmlFor="phone">	
                                    Phone
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
										
										
									/>
									<label htmlFor="email">
                                    Email
									</label>
									
								</div>

                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="number"
										className="form-control"
										id="Password"
										name="Password"
										
										
									/>
									<label htmlFor="Password">
                                    Password
									</label>
									
								</div>

                                <div
									className={`form-floating mb-3 `}
								>
									<input
										type="number"
										className="form-control"
										id="Confirm Password"
										name="Confirm Password"
										
										
									/>
									<label htmlFor="Confirm Password">
                                    Confirm Password
									</label>
									
								</div>
                                

                              
								<button className="button">Register</button>
								<h6>If you already have an account. <Link href="/delete-account">Login now!</Link> </h6>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;

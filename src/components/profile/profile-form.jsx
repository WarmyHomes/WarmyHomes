"use client";
import Link from "next/link";
import "./profile-form.scss";


const ProfileForm = () => {

	return (
		<div className="container profile-form">
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
                              
								<button className="button">Update</button>
								<h6>If you want to delete your account <Link href="/delete-account">click here!</Link> If you delete your account, all related records with this account will also be deleted permanently.</h6>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;

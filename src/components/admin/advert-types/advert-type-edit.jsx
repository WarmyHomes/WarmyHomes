"use client";
import React, { useState } from 'react';
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import InputMask from "react-input-mask-next";

const AdvertTypeEdit = ({ data }) => {
	const [state, setState] = useState({
		errors: {} // Hata durumlarını tutmak için kullanılabilir
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Form submit işlemleri burada yapılacak
	};

	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					<div className="card-title">Edit</div>
					<form onSubmit={handleSubmit}>
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col">
								<label htmlFor="name">Title:</label>
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.name
										)}`}
										id="name"
										name="title"
										placeholder="Title"
									/>
									<label htmlFor="name">Title</label>
									<div className="invalid-feedback">{state.errors?.title}</div>
								</div>
							</div>
							{/* Diğer input alanlarını buraya ekleyebilirsiniz */}
						</div>
						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Create" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdvertTypeEdit;

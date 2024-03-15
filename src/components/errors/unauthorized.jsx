"use client"
import React from 'react'
import { swalConfirm } from "@/helpers/swal";
import { signOut } from "next-auth/react";
import Image from "next/image";
import "./unauthorized.scss"

const UnAuthorization = () => {
    const handleLogout = async () => {
		const resp = await swalConfirm("Are you sure to logout");
		if (!resp.isConfirmed) return;

		signOut({ callbackUrl: "/login" });
	};
  return (
    <div className="container">
			<div className="row g-5 g-sm-0 align-items-center">
				<div className="col-sm-6">
					<Image
						src="/images/errors/unauthorized.png"
						className="img-fluid"
						width="450"
						height={450}
						alt="Unauthorized"
					/>
				</div>
				<div className="col-sm-6 text-center text-sm-start">
					<h2>Sorry you are not authorized to access.</h2>
					<p>
						Please check your login credentials or contact the administrator
					</p>
					<button className="btn btn-primary logout " onClick={handleLogout}>
						LOGOUT
					</button>
				</div>
			</div>
		</div>
  )
}

export default UnAuthorization;
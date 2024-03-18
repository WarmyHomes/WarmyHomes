"use client"

import Image from 'next/image';
import React from 'react'
import "./not-found.scss"
import { useRouter } from 'next/navigation';


const NotFound = () => {

    const router = useRouter();

  return (
    <div className="container">
			<div className="row g-5 g-sm-0 align-items-center ">
				<div className="col-sm-6">
					<Image
						src="/images/errors/notfound.png"
						className="img-fluid"
						width="450"
						height={450}
						alt="Not found"
					/>
				</div>
				<div className="col-sm-6 text-center text-sm-start">
					<h2>Oops! It looks like you're lost</h2>
					<p>
						The page you're looking for isn't available. Try to search again or use to go to:
					</p>
                    <button className="btn btn-primary go " onClick={() => router.push('/')}>
						Go To Home Page
					</button>
				</div>
			</div>
		</div>
  )
}

export default NotFound

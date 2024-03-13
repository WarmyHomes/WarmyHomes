import React from 'react'
import { TfiArrowTopRight } from "react-icons/tfi";
import Image from "next/image";
import "./style.scss";

const RegisterNow = () => {
  return (
   <div className='register-now-container 'style={{ maxWidth:'95%'}}>
<div className='col  register-left-side'>
<h2>Get your dream house</h2>
<h6>Turn your aspirations into reality with 'Get Your Dream House' – where your perfect home becomes a possibility.</h6>
<button className="btn btn-success btn-md register-button mt-3  ">Register Now <TfiArrowTopRight/></button>
</div>
<div className='col register-right-side'>
           <Image
							src={`/images/highlight.png`}
							className="register-img "
              fluid
              width={350}
							height={210}
							/>
</div>
   </div>
  )
}

export default RegisterNow;









import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./contact-us.scss";

const ContactUs = () => {
  return (
   <div className='contact-us-container'>
<div className=' col contactus-left-side'>
<h2>Need help? Talk to our expert.</h2>
<h6>Talk to our experts or Browse through more properties.</h6>
</div>
<div className='col contact-us-right-side'>
<button className="contact-button btn btn-light btn-md me-3 ">Contact Us <TfiArrowTopRight/></button>
<button className=" contact-button btn btn-light btn-md  ">Contact Us <BsTelephone/></button>
						
</div>			
</div>
   
  )
}

export default ContactUs;

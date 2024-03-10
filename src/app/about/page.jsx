import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import "./about.scss";
import { RiTreeFill } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";
import Image from "next/image";
import SellingOption from "@/components/home-page/selling-option";
import ContactUs from "@/components/home-page/contact-us";
const AboutPage = () => {
  return (
    <div className="about-container">
      <PageHeader title={"About Page"} />
      <Spacer/>

      <div className="row about-wrapper ">
      <div  xs={12} lg={6} className="col about-left-side">
            <Image
              src={`/images/about.png`}
							className="about-img "
              fluid
              width={350}
							height={210}
            ></Image>
      </div>      
          <div xs={12} lg={6} className="col about-right-side">
            <h3>We're on a Mission to Change
 <br /> View of Real Estate Field.
 </h3>
            <p>
            At the heart of our vision lies a resolute commitment to transform the landscape of the real estate industry. We're not just a company; we're on a mission to change the very essence of how real estate is perceived and experienced. Our journey is defined by innovation, transparency, and a relentless pursuit of excellence. With a bold and forward-thinking approach, we seek to revolutionize the traditional norms of the real estate field, making it more accessible, efficient, and customer-centric. Our aspiration is to shape a future where buying, selling, or investing in real estate is a seamless and empowering experience for all. Join us on this transformative journey as we rewrite the narrative of real estate.
            </p>

            <div className="text">
              <div className="icons">
                <span className="circle home">
                <HiHomeModern />
                </span>
                <p>Modern Architect </p>
              </div>
              <div className="icons">
                <span className="circle tree">
                <RiTreeFill />
                </span>
                <p>Green Building</p>
              </div>
            </div>
      </div>
      </div>
      <Spacer/>
      <SellingOption/>
      <Spacer/>
      <ContactUs/>
      </div>
  );
};

export default AboutPage;














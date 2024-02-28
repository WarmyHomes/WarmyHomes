import React from "react";
import { config } from "@/helpers/config";
import "./footer.scss";
import Logo from "../header/logo";
import MainMenu from "../header/main-menu";
import ContactMenu from "@/components/contact/contact-menu";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row g-3">
					<div className="col-lg-3">
						<Logo/>
						<p>{config.project.description}</p>
					</div>
					<div className="col-sm-6 col-lg">
						<h3>Quiks Links</h3>
						<MainMenu className="nav flex-column"/>
					</div>
					
					<div className="col-lg">
						<h3>Contact</h3>
                        <ContactMenu className="nav flex-column"/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import Image from "next/image";
import React from "react";
import "./discover-properties-card.scss";

const DiscoverPropertiesCard = () => {
	
	return (
		<div className="card discover-properties-card">
			<Image
			src={`/images/houses/villa_image.png`}
				width={200}
				height={400}
				
			/>

			<div className="card-title">
				<h4>advert gelmeli</h4>
				<h6>price gelmeli</h6>
			</div>
		</div>
	);
};

export default DiscoverPropertiesCard;

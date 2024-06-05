import React from 'react'
import DiscoverPropertiesCard from './discover-properties-card';
import "./discover-properties.scss";

const DiscoverProperties = () => {
  return (
		<div className="discover-properties-container">
		 <h2 >Discover Popular Properties</h2>
      <p >Featured properties</p>
			<div className="row g-4">
					<div className="col-sm-6 col-md-4 col-lg-3" >
						<DiscoverPropertiesCard />
					</div>
				
			</div>
		</div>
	);
}

export default DiscoverProperties;
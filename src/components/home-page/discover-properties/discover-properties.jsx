import React from 'react'
import DiscoverPropertiesCard from './discover-properties-card';
import "./discover-properties.scss";
import { getPopularAdverts } from '@/services/discover-service';

const DiscoverProperties = async() => {  
	const res = await getPopularAdverts();

	const data = await res.json();
  
	console.log("DATA", data);
  
	if (!res.ok) throw new Error(data.message);
	return (

  
		<div className="discover-properties-container">
		 <h2 >Discover Popular Properties</h2>
      <p >Featured properties</p>
			<div className="row g-4">
					<div className="col-sm-6 col-md-4 col-lg-3" >
						<DiscoverPropertiesCard data={data}/>
					</div>
				
			</div>
		</div>
	);
}

export default DiscoverProperties;
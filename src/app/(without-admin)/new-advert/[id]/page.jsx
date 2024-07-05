

import NewAdvertImage from "@/components/advert/newAdvertImage";
import React from "react";

const page = async ({ params }) => {

 
    const advertId=params;

  
  return (
    <div>
           <NewAdvertImage   advertId={advertId}/>
    </div>
  );
};

export default page;

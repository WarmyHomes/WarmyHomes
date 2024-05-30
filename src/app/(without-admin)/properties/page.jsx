import Properties from '@/components/properties/properties';
import { getAllAdvertType } from '@/services/advertType-servise';
import { getCategories } from '@/services/categories-servise';

import { allAdvertsQueryByPage } from '@/services/create-advert-service';
import React from 'react';

const page = async () => {


  
    const res = await allAdvertsQueryByPage();
    const resa = await getAllAdvertType();
    const resb = await getCategories();
   
  

    if (!res.ok) throw new Error(await res.text());
    if (!resa.ok) throw new Error(await resa.text());
    if (!resb.ok) throw new Error(await resb.text());

    const data = await res.json();
    const advertTypeData = await resa.json();
    const categories = await resb.json();

  
    //console.log("Advertss>>>>>>>>>>>", JSON.stringify(data, null, 2));


   

    return (
      <>
        <Properties data={data} advertTypeData={advertTypeData} categories={categories} />
      </>
    );

}

export default page;

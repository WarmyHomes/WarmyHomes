import Properties from '@/components/properties/properties';
import { getAllCities } from '@/services/adress';
import { getAllAdvertType } from '@/services/advertType-servise';
import { getCategories } from '@/services/categories-servise';

import { allAdvertsQueryByPage } from '@/services/create-advert-service';
import React from 'react';

export async function page({ searchParams}) {

  const {city_id} =searchParams

  
    const res = await allAdvertsQueryByPage(searchParams);

    const resb = await getCategories();
    const resc =await getAllCities();
   
  

    if (!res.ok) throw new Error(await res.text());

    if (!resb.ok) throw new Error(await resb.text());
    if (!resc.ok) throw new Error(await resc.text());

    const data = await res.json();
 
    const categories = await resb.json();
    const cities = await resc.json();



   
    console.log("adverttt<<<<<<>>>>>>",data)


   

    return (
      <>
        <Properties data={data} categories={categories} cities={cities} />
      </>
    );

}

export default page;

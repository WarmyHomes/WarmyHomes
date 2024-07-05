import Properties from '@/components/properties/properties';
import { getAllCities } from '@/services/adress';
import { getCategories } from '@/services/categories-servise';

import { allAdvertsQueryByPage } from '@/services/create-advert-service';
import { getAllMyFavorites } from '@/services/my-favorites';
import React from 'react';

export async function page({ searchParams}) {

  const {city_id} =searchParams

  
    const res = await allAdvertsQueryByPage(searchParams);

    const resb = await getCategories();
    const resc =await getAllCities();

    const resd = await getAllMyFavorites();
   
  

    if (!res.ok) throw new Error(await res.text());
    if (!resb.ok) throw new Error(await resb.text());
    if (!resc.ok) throw new Error(await resc.text());


    const data = await res.json();
 
    const categories = await resb.json();
    const cities = await resc.json();
    const myfavorites = await resd.json();

  
   
   

    return (
      <>
        <Properties data={data} categories={categories} cities={cities} myfavorites={myfavorites} />
      </>
    );

}

export default page;

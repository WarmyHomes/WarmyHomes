

import AddNewAdvertForm from '@/components/advert/addNewAdvertForm'
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import { getAllAdvertType } from '@/services/advertType-servise'
import { getCategories } from '@/services/categories-servise'
import { getAllCities, getAllCountries, getAllDistricts } from '@/services/create-advert-service'
import React from 'react'

const page = async () => {


  
  const resa = await getAllAdvertType();
  const resb = await getAllCountries();
  const resc = await getAllCities();
  const resd = await getAllDistricts();
  const rese = await getCategories();


  const advert_type = await resa.json();
  const country =await resb.json();
  const city= await resc.json();
  const districts =await resd.json();
  const categories =await rese.json();

  //console.log("city", city);
  //console.log("country", country);
  //console.log("districts", districts);
  //console.log("categories", JSON.stringify(categories, null, 2));

  if (!resa.ok) throw new Error(advert_type.message);
  if (!resb.ok) throw new Error(country.message);
  if (!resc.ok) throw new Error(city.message);
  if (!resd.ok) throw new Error(districts.message);
  if (!resd.ok) throw new Error(categories.message);

  return (
    <>
      <PageHeader title={"New Advert"}/>
    
      <AddNewAdvertForm  advert_type={advert_type} country={country} city={city}   districts={districts} categories={categories}/>
      <Spacer height={450}/>
    </>
  )
}

export default page
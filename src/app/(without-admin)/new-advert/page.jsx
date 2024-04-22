import AddNewAdvert from '@/components/advert/addNewAdvert'
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHeader title={"New Advert"}/>
      <Spacer></Spacer>
      <AddNewAdvert></AddNewAdvert>
      <Spacer height={450}></Spacer>
    </>
  )
}

export default page
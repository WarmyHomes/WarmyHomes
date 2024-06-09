
import CategoriesNew from '@/components/admin/categories/categories-new'
import PageHeader from '@/components/common/page-header'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeader title={"New Categories"} />
        <CategoriesNew/>
    </div>
  )
}

export default page
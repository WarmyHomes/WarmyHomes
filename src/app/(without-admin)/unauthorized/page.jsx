import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import UnAuthorization from '@/components/errors/unauthorized'
import React from 'react'

const UnauthorizedPage = () => {
  return (
    <>
    <PageHeader title={"UNAUTHORIZED"} />
    <Spacer/>
    <UnAuthorization/>
    <Spacer/>
    <Spacer/>
    </>
    
  )
}

export default UnauthorizedPage
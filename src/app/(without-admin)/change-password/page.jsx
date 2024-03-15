import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import ChangePasswordForm from '@/components/change-password/change-password-form'
import React from 'react'

const ChangePassword= () => {
  return (
    <>
      <PageHeader title={"CHANGE PASSWORD"}/> 
      <Spacer/>
      <ChangePasswordForm/>
      <Spacer/>
    </>
  )
}

export default ChangePassword;
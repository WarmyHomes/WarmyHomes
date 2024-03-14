import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import ForgotPasswordForm from '@/components/forgot-password-form/forgot-password-form'
import React from 'react'

const ForgotPassword= () => {
  return (
    <>
      <PageHeader title={"FORGOT PASSWORD"}/> 
      <Spacer/>
      <ForgotPasswordForm/>
      <Spacer/>
    </>
  )
}

export default ForgotPassword;
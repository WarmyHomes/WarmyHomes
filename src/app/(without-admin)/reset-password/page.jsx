import ResetPasswordForm from '@/components/reset-password/reset-password-form'
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'

import React from 'react'

const ResetPassword= () => {
  return (
    <>
      <PageHeader title={"RESET PASSWORD"}/> 
      <Spacer/>
      <ResetPasswordForm/>
      <Spacer/>
    </>
  )
}

export default ResetPassword;
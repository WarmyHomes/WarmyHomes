import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import RegisterForm from '@/components/register-form/register-form'

import React from 'react'

const RegisterPage= () => {
  return (
    <>
      <PageHeader title={"REGISTER"}/> 
      <Spacer/>
      <RegisterForm/>
      <Spacer/>
    </>
  )
}

export default RegisterPage;
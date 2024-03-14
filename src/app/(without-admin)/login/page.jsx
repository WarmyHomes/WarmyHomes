import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import LoginForm from '@/components/login/login-form'
import React from 'react'

const LoginPage= () => {
  return (
    <>
      <PageHeader title={"LOGIN"}/> 
      <Spacer/>
      <LoginForm/>
      <Spacer/>
    </>
  )
}

export default LoginPage
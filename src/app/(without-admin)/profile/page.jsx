import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import ProfileForm from '@/components/profile/profile-form'

import React from 'react'

const ProfilePage= () => {
  return (
    <>
      <PageHeader title={"My Profile"}/> 
      <Spacer/>
      <ProfileForm/>
      <Spacer/>
    </>
  )
}

export default ProfilePage;
import Spacer from '@/components/common/misc/spacer'
import PageHeader from '@/components/common/page-header'
import ProfileForm from '@/components/profile/profile-form'
import { auth } from "@/auth";
import React from 'react'

const ProfilePage= async() => {
  const session = await auth();
  console.log("Session",session)
  return (
    <>
      <PageHeader title={"My Profile"}/> 
      <Spacer/>
      <ProfileForm session={session}/>
      <Spacer/>
    </>
  )
}

export default ProfilePage;
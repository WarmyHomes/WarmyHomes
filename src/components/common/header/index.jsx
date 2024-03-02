import React from 'react'
import Menubar from './menubar'
import Spacer from '../spacer'
import PropertiesSection from '@/components/home/properties'


const Header = () => {
  return (
    <>
    
      <Menubar/>
      <Spacer/>
      
      <Spacer/>
      <PropertiesSection/>
      
    </>
  )
}

export default Header

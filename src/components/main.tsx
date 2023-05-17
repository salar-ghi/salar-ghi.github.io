import React from 'react'
import { motion } from 'framer-motion'
import Menu from '@/subComponents/MenuComponent';
import Gmail from '../subComponents/GmailComponent';
import SocialIcons from '@/subComponents/SocialIcons';

const Main = ({  }) => {
  return (
    <div className='bg-[#1b1b1b]'>
      
      <SocialIcons />
      <Menu />
      <Gmail />
      


    </div>
  )
}

export default Main;



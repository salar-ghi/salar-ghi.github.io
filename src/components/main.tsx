import React from 'react'
import { motion } from 'framer-motion'
import Menu from '@/subComponents/MenuComponent';
import Gmail from '../subComponents/GmailComponent';
import SocialIcons from '@/subComponents/SocialIcons';
import LogoComponent from '@/subComponents/LogoComponent';
import Home from './home';
import About from './about';

const Main = ({  }) => {
  return (
    <div className='bg-[#1b1b1b] overflow-x-scroll scrollbar-hide'>
      
      {/* <LogoComponent /> */}
      <SocialIcons />
      <Menu />
      {/* <Gmail /> */}

      <div className=''>
        <Home />
        {/* <About /> */}

      </div>
    </div>
  )
}

export default Main;



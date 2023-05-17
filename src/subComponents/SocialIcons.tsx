import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter, Youtube } from '../data/AllSvgs'


const SocialIcons = () => {
  return (
    <div className='flex flex-row-reverse items-center 
        fixed top-5 right-0 bg-transparent z-30 last:-mx-1 last:my-0' >

        <motion.span className='h-[0.2px] w-[calc(100vw - 60vw)] bg-[#e9e9e9]'
            initial={{ width: 0, height: 0.2 }}
                animate={{ width: 'calc(100vw - 85vw)' }}
                transition= {{ type: 'spring', duration: 1, delay: 0.5 }} >
        </motion.span>

        <motion.div className='ml-4 mr-3'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:0.9}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Github width={22} height={22} fill={'#e9e9e9'}/>
            </Link>
        </motion.div>

        <motion.div className='mx-4'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.1}} >
            <Link href={{pathname:"https://www.linkedin.com/in/salar-ghahremani/", query: {} }} >
                <Linkedin width={22} height={22} fill={'#e9e9e9'}/>
            </Link>
        </motion.div>

        <motion.div className='mx-4'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.3}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Twitter width={22} height={22} fill={'#e9e9e9'}/>
            </Link>
        </motion.div>

        <motion.div className='mx-4'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.5}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Instagram width={22} height={22} fill={'#e9e9e9'}/>
            </Link>
        </motion.div>

        <motion.div className='mx-4'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.7}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Youtube width={22} height={22} fill={'#e9e9e9'}/>
            </Link>
        </motion.div>

    </div>
  )
}

export default SocialIcons
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter, Youtube } from '../data/AllSvgs'


const SocialIcons = () => {
  return (
    <div className='flex flex-row items-center justify-center mx-auto
        fixed top-5 left-0 bg-transparent z-30 last:-mx-1 last:my-0 -ml-1' >
            
        <motion.span className='h-[0.2px] w-[calc(100vw - 55vw)] bg-[#e9e9e9] mr-1 my-auto'
            initial={{ width: 0, height: 0.2 }}
                animate={{ width: 'calc(100vw - 55vw)' }}
                transition= {{ type: 'spring', duration: 1, delay: 0.6 }} >
        </motion.span>

        <motion.div className='mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1}} >
            <Link href={{pathname:"https://github.com/Salarghi93", query: {} }} >
                <Github width={22} height={22} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none"/>
            </Link>
        </motion.div>

        <motion.div className='mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.2}} >
            <Link href={{pathname:"https://www.linkedin.com/in/salar-ghahremani/", query: {} }} >
                <Linkedin width={22} height={22} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none"/>
            </Link>
        </motion.div>

        <motion.div className='mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.4}} >
            <Link href={{pathname:"https://twitter.com/salarghi", query: {} }} >
                <Twitter width={22} height={22} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none"/>
            </Link>
        </motion.div>

        <motion.div className='mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.6}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Instagram width={22} height={22} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none"/>
            </Link>
        </motion.div>

        <motion.div className='mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.9}} >
            <Link href={{pathname:"https://github.com/sAlArghi93", query: {} }} >
                <Youtube width={22} height={22} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none"/>
            </Link>
        </motion.div>

    </div>
  )
}

export default SocialIcons
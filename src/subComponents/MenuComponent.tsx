import React from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from "@material-tailwind/react";

const Menu = () => {
  return (
    <div className='flex flex-col items-center justify-center my-auto
      fixed top-0 left-4 z-30 last:-my-1 last:mx-0 bg-transparent'>


      <motion.span className='w-[0.2px] h-[calc(100vh-68vh)] bg-[#e9e9e9] -mt-1 mb-1'
        initial={{ height: 0 }}
        animate={{ height: 'calc(100vh - 68vh)' }}
        transition= {{ type: 'spring', stiffness: 100, duration: 1, delay: 0.6 }} >          
      </motion.span>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1}} >
          {/* <div className='transititext-primary text-primary transition duration-75 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'>               */}
              <Tooltip content="Home" placement="right-start" 
                className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
                <div className='odd-triangle'></div>
              </Tooltip>
          {/* </div> */}
      </motion.div>

      <motion.div initial={{ opacity: 0 , scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.2}} >
          <Tooltip content="About" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='even-triangle'></div>
          </Tooltip>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.4}} >
          <Tooltip content="Projects" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='odd-triangle'></div>
          </Tooltip>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.6}} >
          <Tooltip content="Blog" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='even-triangle'></div>
          </Tooltip>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.8}} >
          <Tooltip content="Skills" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='odd-triangle'></div>
          </Tooltip>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:2}} >
          <Tooltip content="Podcast" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='even-triangle'></div>
          </Tooltip>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:2.2}} >
          <Tooltip content="Project" placement="right-start" 
                  className='font-fondaItalic font-bold ml-2 text-[#1b1b1b] text-xs bg-[#fff]'>
            <div className='odd-triangle'></div>
          </Tooltip>
      </motion.div>

    </div>
  )
}

export default Menu
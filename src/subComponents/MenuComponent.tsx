import React from 'react'
import { motion } from 'framer-motion'


const Menu = () => {
  return (
    <div className='flex items-center flex-col 
      fixed bottom-0 left-4 z-30 last:-my-1 last:mx-0 bg-transparent'>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:2.1}} >
            <div className='odd-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0 , scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.6}} >
          <div className='even-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.5}} >
        <div className='odd-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.3}} >
          <div className='even-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:1.1}} >
        <div className='odd-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:0.9}} >
          <div className='even-triangle'></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale:[0,1,1.7,1] }}
        transition={{type:'spring', stiffness: 100, duration:1, delay:0.7}} >
          <div className='odd-triangle'></div>
      </motion.div>

      <motion.span className='w-[0.8px] h-[calc(100vh-73vh)] bg-[#e9e9e9]'
        initial={{
          height: 0,
        }}
        animate={{
          height: 'calc(100vh - 73vh)',
        }}
        transition= {
          { type: 'spring', stiffness: 100, duration: 1, delay: 0.5 }
        }>
          
      </motion.span>

    </div>
  )
}

export default Menu
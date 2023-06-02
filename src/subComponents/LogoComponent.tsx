import React from 'react'
import { motion } from 'framer-motion'

const sentence1 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, 
      transition: { delay : 0.6, staggerChildren: 0.10,
          type: 'spring', duration: 0.8,
      },
  },
}

const letter1 = {
  hidden : {opacity: 0, scale: 0, y:200},
  visible: { opacity: 1, scale: [0, 1.2 , 2, 1] , y: 0 },
}

const sentence2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, 
      transition: { delay : 0.9, staggerChildren: 0.12,
          type: 'spring', duration: 1,
      },
  },
}

const letter2 = {
  hidden : {opacity: 0, scale: 0, y:200},
  visible: { opacity: 1, scale: [0, 1.2 , 2, 1] , y: 0 },
}

const name = "Salar"
const family = "Ghahremani"

const LogoComponent = () => {
  return (
    <div className='flex flex-row items-center justify-center mt-3 z-30 fixed inset-x-0'>

      <motion.h2 className="flex flex-row text-3xl tracking-wider font-semibold font-['Niconne'] [word-spacing: 1.2cm]"
        variants={sentence1} initial="hidden" animate="visible" >
        {name.split("").map((char, index) => {
          return (
              <motion.span className='block'
                  key={char + "-" + index } variants={letter1} >
                  {char}
              </motion.span>
            )}
          )}
      </motion.h2>

      {/* <motion.h2 className="flex flex-row text-3xl ml-3 tracking-wider font-semibold font-['Niconne'] [word-spacing: 1.2cm]"
        variants={sentence2} initial="hidden" animate="visible" >

        {family.split("").map((char, index) => {
          return (
              <motion.span className='block'
                  key={char + "-" + index } variants={letter2} >
                  {char}
              </motion.span>
            )}
          )}
      </motion.h2> */}
    </div>
  )
}

export default LogoComponent
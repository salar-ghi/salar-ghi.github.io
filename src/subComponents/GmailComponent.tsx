import React from 'react'
import { motion } from 'framer-motion'

const gmail = "salar.ghi1993@gmail.com"

const sentence = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, 
        transition: { delay : 0.6, staggerChildren: 0.10,
            type: 'spring', duration: 0.9,
        },
    },
}

const letter = {
    hidden : {opacity: 0, scale: 0, y:200},
    visible: { opacity: 1, scale: [0, 1.2 , 2, 1] , y: 0 },
    // transition: {delay: 1.5 , duration: 0.5}
}

const Gmail = () => {
  return (
    <div className='flex items-center flex-row fixed bottom-5 left-0 bg-transparent'>

        <motion.span className='h-[0.2px] w-[calc(100vw - 60vw)] bg-[#e9e9e9]'
            initial={{ width: 0, height: 0.2 }}
                animate={{ width: 'calc(100vw - 60vw)' }}
                transition= {{ type: 'spring', duration: 1, delay: 0.5 }} >
        </motion.span>


        <motion.h3 className='flex flex-row cursor-text mb-1 mx-2 font-serif text-lg tracking-widest font-thin text-[#e9e9e9]'
            variants={sentence}
            initial="hidden"
            animate="visible"
            >

            {gmail.split("").map((char, index) => {
                return (
                    <motion.span className='block'
                        key={char + "-" + index } variants={letter} >
                        {char}
                    </motion.span>
                )
            })
            }
        </motion.h3>

            
    </div>
  )
}

export default Gmail
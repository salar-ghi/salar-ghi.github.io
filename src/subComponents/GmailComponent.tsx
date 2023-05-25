import React from 'react'
import { motion } from 'framer-motion'

// import Link from 'next/link'
// import { Github, Instagram, Linkedin, Twitter, Youtube } from '../data/AllSvgs'

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
}

const Gmail = () => {
  return (
    <div className='flex items-center justify-center flex-row mx-auto fixed bottom-5 left-0 bg-transparent'>

        <motion.span className='h-[0.2px] w-[calc(100vw - 58vw)] bg-[#e9e9e9]'
            initial={{ width: 0, height: 0.2 }}
                animate={{ width: 'calc(100vw - 58vw)' }}
                transition= {{ type: 'spring', duration: 1, delay: 0.5 }} >
        </motion.span>
        
        <motion.h3 className="flex flex-row cursor-text mb-1 mr-2 ml-1 
        font-['Fonda-italic'] text-xl tracking-wider font-thin text-[#e9e9e9]"
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
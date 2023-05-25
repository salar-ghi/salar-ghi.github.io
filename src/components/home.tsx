import React from 'react'
import { motion } from 'framer-motion'
// import "@/assets/styles/pyramid.css"

const sentence1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, 
        transition: { delay : 0.2, staggerChildren: 0.25,  stiffness: 300,
            type: 'spring', duration: 0.5,
        },
    },
}
  
const letter1 = {
    hidden : {opacity: 0, y:200},
    visible: { opacity: 1, scale: [0, 1.4 , 2.2, 1] , y: 0 },
}

const name = "Salar"

const Home = () => {
  return (
    <div className="container1">
        <div className="side left"></div>
        <div className="side front"></div>
        <div className="side right"></div>
        <div className="side back"></div>
        
        <motion.h2 className="Logo
            text-4xl tracking-wider font-semibold font-['Niconne'] [word-spacing: 1.4cm]"
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



        <div className="shadow"></div>
    </div>
  )
}

export default Home
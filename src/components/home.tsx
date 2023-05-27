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
    <div className='flex flex-col
    '>

    
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


    <div className='flex flex-col mx-auto text-center w-[32vw]
     items-center justify-center fixed bottom-52 inset-x-0 mt-4'>

        <h2 className="font-['Fonda-italic'] text-xl tracking-wider font-thin text-[#e9e9e9] ">
            Hi, I'm
            {/* <span className='inline-block h-8 w-8'> ✌️ </span> */}
            {/* ✌️✌️🤟🖐🏻🖐️ */}
        </h2>
        
        <h2 className="font-['Fonda-italic'] text-2xl tracking-wider font-thin text-[#D6BD68] bg-transparent
            text-shadow-golden shadow-[#a67c00]">
            Salar Ghahremani
        </h2>
        
        <h2 className="font-['Fonda-italic'] text-base tracking-widest font-medium text-[#e9e9e9] break-words mt-3">
            {/* an entrepreneur and software architect */}

            machine learning specialist and software engineer with experience 
            in developing web applications and software solutions.            
        </h2>

        {/* <h2>
            can you generate a text for portfolio website a person who is entrepreneur
            / 
            Hello! I’m an entrepreneur with experience in developing and launching successful businesses.
            I have worked on projects ranging from e-commerce platforms to mobile applications. 
            My expertise lies in identifying market opportunities and developing innovative solutions to meet the needs of customers.
            On this website, you’ll find examples of my work, including businesses I’ve launched both professionally and independently. 
            You’ll also find information about my skills and experience, as well as my education and certifications.
            If you’re interested in working together or have any questions about my work, please don’t hesitate to get in touch!
        </h2> */}

    </div>
   </div>



  )
}

export default Home
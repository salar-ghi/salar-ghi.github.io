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
const family = " Ghahremani"

const nameLogo = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1, 
        transition: { delay : 0.6, staggerChildren: 0.10,
            type: 'spring', duration: 0.8,
        },
    },
}

const word = {
    hidden : {opacity: 0, scale: 0, y:200},
    visible: { opacity: 1, scale: [0, 1.4 , 2.2, 1] , y: 0 },
}

const sentence2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, 
        transition: { delay : 0.9, type: 'spring', duration: 0.8, staggerChildren: 0.22,
        },
    },
}

const word2 = {
    hidden : {opacity: 0, scale: 0, y:200},
    visible: { opacity: 1, scale: [0, 1.4 , 2.2, 1] , y: 0 },
}

const Intro = "machine learning specialist and software engineer with experience in developing web applications and software solutions."

const container ={
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren:0.4 *1, duration: 0.9, type: 'spring' },
    }),
};

const child = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping:12,
            stiftness: 100,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiftness: 100,
        },
    },
};

const Home = () => {
    const words = Intro.split(" ");

    

    return (
        <div className='flex flex-col '>
        
            <div className="pyramid">
                <div className="side left"></div>
                <div className="side front"></div>
                <div className="side right"></div>
                <div className="side back"></div>
                
                <motion.h2 className="Logo
                    tracking-wider font-semibold font-['Niconne'] [word-spacing: 1.4cm]"
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


        <div className='txtintro flex flex-col mx-auto text-center items-center justify-center fixed inset-x-0 mt-4
            w-[90vw] bottom-14 sm:w-[80vw] md:w-[68vw] lg:w-[60vw] xl:w-[48vw] 2xl:w-[44vw]'>

            <motion.h2 className="font-['Fonda-italic'] tracking-wider font-thin text-[#e9e9e9] 
                text-sm sm:text-base md:text-xl ">
                Hi, I'm
            </motion.h2>

            <div className="flex flex-row font-['Fonda-italic'] text-[#D6BD68] bg-transparent font-thin">
            
                <motion.h2 className="flex flex-row tracking-wider text-shadow-golden 
                    shadow-[#a67c00] text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl "
                    variants={nameLogo} initial="hidden" animate="visible">
                    
                    {name.split("").map((char, index) => {
                    return (
                        <motion.span className='block'
                            key={char + "-" + index } variants={word} >
                            {char}
                        </motion.span>
                        )}
                    )}
                </motion.h2>

                <motion.h2 className="flex flex-row tracking-wider text-shadow-golden shadow-[#a67c00] 
                    ml-2 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl"
                    variants={sentence2} initial="hidden" animate="visible" >
                    {family.split("").map((char, index) => {
                    return (
                        <motion.span className='block'
                            key={char + "-" + index } variants={word2} >
                            {char}
                        </motion.span>
                        )}
                    )}
                </motion.h2>
            </div>
            
            <motion.h2 className="font-['Fonda-italic'] tracking-widest text-[#e9e9e9] break-words mt-3
                text-sm font-thin md:text-sm md:font-thin lg:text-base lg:font-medium"
                initial="hidden" animate="visible" variants={container}>
                
                {/* an entrepreneur and software architect */}

                machine learning specialist and software engineer with experience 
                in developing web applications and software solutions.

            </motion.h2>



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
import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Envelop, Github, Instagram, Linkedin, Twitter, Youtube } from '../data/AllSvgs';


// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const SocialIcons = () => {
    const size = useWindowSize();
    console.log(size.width)
    console.log(size.height)
  return (
    <div className='flex flex-row items-center justify-center mx-auto fixed 
        top-5 left-0 bg-transparent z-30 last:-mx-1 last:my-0 -ml-1 '>
          
        <motion.span className='h-[0.2px] bg-[#e9e9e9] mr-1 my-auto
            w-[calc(28vw)] md:w-[calc(30vw)] 
            lg:w-[calc(33vw)] xl:w-[calc(40vw)] 2xl:w-[calc(45vw)]'
            initial={{ width: 0, height: 0.2 }}
            animate={{ 
                width: ( size.width < 480) ? 'calc(29vw)' : 
                    ( ( size.width >= 481 && size.width < 768) ? 'calc(38vw)' : 
                    ( ( size.width >= 769 && size.width < 1100) ? 'calc(43vw)' : 
                    ( ( size.width >= 1100.1 && size.width < 1500) ? 'calc(43.5vw)' : 
                    ( ( size.width >= 1501 && size.width < 2200) ? 'calc(45.5vw)' : 'calc(47.5vw)'
                  ))))
              }}
            transition= {{ type: 'spring', duration: 1, delay: 0.6 }}>
        </motion.span>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: [0, 0.2, 0.8, 1], scale:[0, 1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1}} >
            <Link href={{pathname:"https://github.com/Salarghi93", query: {} }} >
                <Github width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none
                    w-4 h-4
                    lg:w-6 lg:h-6
                    "/>
            </Link>
        </motion.div>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.2}} >
            <Link href={{pathname:"https://www.linkedin.com/in/salar-ghahremani/", query: {} }} >
                <Linkedin width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none                    
                    w-4 h-4
                    lg:w-6 lg:h-6
                    "/>
            </Link>
        </motion.div>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.4}} >
            <Link href={{pathname:"https://twitter.com/salarghi", query: {} }} >
                <Twitter width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none
                    w-4 h-4
                    lg:w-6 lg:h-6
                    "/>
            </Link>
        </motion.div>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.6}} >
            <Link href={{pathname:"https://www.instagram.com/salarghi", query: {} }} >
                <Instagram width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none
                    w-4 h-4
                    lg:w-6 lg:h-6"/>
            </Link>
        </motion.div>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.9}} >
            <Link href={{pathname:"https://www.youtube.com/@Salar_G", query: {} }} >
                <Youtube width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none
                    w-4 h-4
                    lg:w-6 lg:h-6"/>
            </Link>
        </motion.div>

        <motion.div className='mx-[6px] xl:mx-2'
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale:[0,1.3 ,2,1]}}
            transition={{type:'spring', duration:1, delay:1.9}} >
            <Link href={{pathname:"mailto:salar.ghi1993@gmail.com", query: {} }} >
                <Envelop width={20} height={20} fill={'#e9e9e9'} className="hover:scale-125 transition-all transform motion-reduce:transition-all 
                    ease-in-out hover:duration-200 motion-reduce:hover:transform-none
                    w-4 h-4
                    lg:w-6 lg:h-6"/>
            </Link>
        </motion.div>

        

    </div>
  )
}

export default SocialIcons
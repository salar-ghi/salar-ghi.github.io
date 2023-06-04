import React from 'react'
import Image from 'next/image';
import img from '@/assets/media/img/sali1.jpg'

const About = () => {
  return (
    <div className='flex flex-col py-10 z-40 bg-[#1b1b1b]'>
      
      <div className='imgagee'>
        <Image 
          src={img} width={300} height={300} alt="Picture of the author"
          className=' ml-24 border border-spacing-1 border-r-2' />
      </div>

      <div className='Abouttext'>
        <h3 className="font-['Fonda-italic'] text-base tracking-widest text-[#e9e9e9] break-words
          font-thin md:text-sm md:font-thin lg:text-base lg:font-medium">
          I’m a Machine learning and software engineer with experience in developing and launching successful projects.
          I have worked on projects ranging from e-commerce platforms to mobile applications. 
          My expertise lies in identifying market opportunities and developing innovative solutions to meet the needs of customers.
          On this website, you’ll find examples of my work, including businesses I’ve launched both professionally and independently. 
          You’ll also find information about my skills and experience, as well as my education and certifications.
          If you’re interested in working together or have any questions about my work, please don’t hesitate to get in touch!
        </h3>

        {/* an entrepreneur and software architect */}
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

export default About
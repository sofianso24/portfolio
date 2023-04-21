import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

// services data

const services=[
  {
    name:'UI/UX design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
    link : 'learn more',
  },
  {
    name:'devlopement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
    link : 'learn more',
  },
  {
    name:'digital marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
    link : 'learn more',
  },
  {
    name:'E.commerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
    link : 'learn more',
  },
]

const Services = () => {
  return (
         <section id='services' className='section'>
             <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                  {/*text and image*/}
                   <motion.div 
                     variants={fadeIn('right',0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false, amount:0.3}}
                   className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten
                   mb-12 lg:mb-0 '>
                     <h2 className='h2 text-accent mb-6'> what i do</h2>  
                     <h3 className='h3 max-w-[455px] mb-16'>i'm a freelance front end devloper with over two years of experience  
                     </h3>
                     <button className='btn btn-sm'> see my work</button>
                    </motion.div> 
                   {/*services*/}
                   <motion.div
                   variants={fadeIn('left',0.3)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once:false, amount:0.3}}
                   className='flex-1'>
                       {/*service list*/}
                        <div> 
                           {services.map((service,index)=>{
                            const {name,link,description} = service
                            return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                <div className='maw-w-[476px]'>
                                   <h4 className='text-[20px] tracking-wider font-primary
                                   font-semibold mb-6'>{name}</h4>
                                   <p className='font-secondary leading-tight'>{description}</p>
                                </div>
                                <div className='flex flex-col flex-1 items-end'>
                                  <a href='#' className='btn h-9 w-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/>
                                  </a>
                                <a href='#' className='text-gradient text-sm'>{link}</a>
                                </div>
                            </div>
                               
                           })}
                        </div>
                   </motion.div>
                </div>
             </div>
           
         </section>
  );
};

export default Services;

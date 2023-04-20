import React from 'react';
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
 
const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  })
  return (
         <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
               <div>
                   <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
                   mix-blend-lighten bg-top'>
                      
                    </div>
                   <div>
                      <h2>About me</h2>
                      <h3>i'm a freelance front end devloper with over two years of experience </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                       {/* stats */}
                       <div className='flex'>
                          <div className='text-[40px] font-tertiary text-gradient mb-2'>
                             <div>
                              {
                                inView ?
                                <CountUp start={0} end={13} duration={5}/> :null} 
                              </div>
                          </div>
                          <div className='font-primary text-sm tracking-[2px]'>
                            years of <br/> experience 
                            </div>
                       </div>
                       <div className='flex'>
                          <div className='text-[40px] font-tertiary text-gradient mb-2'>
                             <div>
                              {
                                inView ?
                                <CountUp start={0} end={13} duration={5}/> :null} 
                              </div>
                          </div>
                          <div className='font-primary text-sm tracking-[2px]'>
                            years of <br/> experience 
                            </div>
                       </div>
                       <div className='flex'>
                          <div className='text-[40px] font-tertiary text-gradient mb-2'>
                             <div>
                              {
                                inView ?
                                <CountUp start={0} end={13} duration={5}/> :null} 
                              </div>
                          </div>
                          <div className='font-primary text-sm tracking-[2px]'>
                            years of <br/> experience 
                            </div>
                       </div>
                   </div>
               </div>
            </div>
 

         </section>
  );
};

export default About;

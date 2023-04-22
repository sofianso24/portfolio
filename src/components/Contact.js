import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  return (
         <section id='contact' className='py-16 lg:section'>
             <div className='container mx-auto'>
               <div className='flex flex-col lg:flex-row '>
                 {/*text*/}
                 <motion.div
                  variants={fadeIn('right',0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false, amount:0.3}}
                 className='flex-1 flex justify-start items-center'>
                   <div>
                      <h4 className='text-xl uppercase text-accent font-medium
                      mb-2 tracking-wide'>get in touch</h4>
                      <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>let's work <br/>together</h2>
                   </div>
                 </motion.div>
                  {/*form */}
                  <motion.form 
                   variants={fadeIn('left',0.3)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once:false, amount:0.3}}
                  className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                     <input className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-accent transition-all ' placeholder='your email'>

                     </input>
                     <input className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-accent transition-all ' placeholder='your name'>
                      
                     </input>
                     <textarea className='bg-transparent border-b py-12 outline-none w-full
                     placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                      placeholder='your message'>

                     </textarea>
                     <button className='btn btn-lg'>send message</button>
                  </motion.form>
               </div>
             </div>
            
         </section>
  );
};

export default Contact;

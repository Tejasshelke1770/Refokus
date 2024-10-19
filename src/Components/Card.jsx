import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({width, start , para, hover="false" }) => {
  return ( 
    <motion.div whileHover={{backgroundColor: hover=="true" && "#7443ff", padding:"25px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between `} >
      <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h3>One Heading</h3>
        <  IoIosArrowRoundForward />
      </div>
      <h1 className='text-3xl font-medium mt-5'>Heading is here.</h1>
      </div>
      <div className='down w-full'>
        {start ?<> <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className='mt-5 border-[1px] border-zinc-50 rounded-full py-2 px-5'>Contact Us</button> </> : ""}
        {para ? <p className='text-sm text-zinc-500 font-medium mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim.</p> : ""}
      </div>
    </motion.div>
  )
}

export default Card

import React from 'react'
import { motion } from 'framer-motion'
const Marquee = ({imagesurl, direction}) => {
  return (
    <div className='flex w-full   overflow-hidden '>
     <motion.div initial={{x:direction ==="left" ? '0': "-100%" }} animate={{x : direction === 'left' ? "-100%" : '0'}} transition={{ease: "linear",repeat:Infinity, duration: "15"}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
     {imagesurl.map((url, index) =>{
        return (
            <img src={url} style={{width: "140px" , filter: "invert(100%)",  }} />
        )
     })}
     </motion.div>
     <motion.div initial={{x:direction ==="left" ? '0': "-100%" }} animate={{x : direction === 'left' ? "-100%" : '0'}} transition={{ease: "linear",repeat:Infinity, duration: "15"}}  className='flex flex-shrink-0 gap-40 py-10 pr-40'>
     {imagesurl.map((url, index) =>{
        return (
            <img src={url} style={{width: "140px" , filter: "invert(100%)",  }} />
        )
     })}
     </motion.div>
    </div>
  )
}

export default Marquee

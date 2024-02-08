import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => { 
  return (
    <div className='w-full whitespace-nowrap overflow-hidden flex'>
      <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear', duration:15}} className='text-9xl py-5 tracking-tighter'>
      Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · &nbsp;
      </motion.div>
      <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear', duration:15}} className='text-9xl py-5 tracking-tighter'>
      Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · &nbsp;
      </motion.div>
    </div>
  )
}

export default Marquee
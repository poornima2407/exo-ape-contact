import { easeInOut, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Image = () => { 
  const [move, setmove] = useState({top:"50%",left:"50%"})
  useEffect(()=>{
    window.addEventListener('mousemove',function(e){
      setmove({top:e.clientY,left:e.clientX})
    })
  })
  return (
    <div>
      <motion.img initial={{top: move.top,left:move.left}} animate={{top:move.top,left:move.left}} transition={{easeInOut:'linear'}} className='fixed z-[2] w-96 -translate-x-[50%] -translate-y-[50%]' src="https://images.unsplash.com/photo-1567303314286-6735a4ad9d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    </div>
  )
}

export default Image
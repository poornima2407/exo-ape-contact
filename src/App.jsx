import React from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Details from './components/Details'
import Image from './components/Image'

const App = () => {
  
  return (
    <div className='font-["TWK Lausanne"] w-full h-screen bg-zinc-900 text-zinc-200'>
      <Navbar />
      <Marquee />
      <Image />
      <Details />
    </div>
  )
}

export default App
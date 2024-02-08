import React from 'react'

const Details = () => {
  return (
    <div className='w-full py-10 px-40 mt-32 flex justify-between '>
      <div className='left'>
        <h1>Ready for lift-off? Ping, tweet, message or poke <br /> — and we will get back as soon as possible.</h1>
        <div className='mt-20'>
        <a href='#' className='block mt-3 font-regular text-lg'>hello@exoape.com</a>
        <a href='#' className='block mt-3 font-regular text-lg'>+31 772 086 200</a>
        </div>
      </div>
      <div className='right '>
        <h3>Willem II Singel 8 <br />6041 HS, Roermond <br />The Netherlands</h3>
        <a href="#" className='font-light text-xl block mt-20'>View on maps</a>
      </div>
    </div>
  )
}

export default Details
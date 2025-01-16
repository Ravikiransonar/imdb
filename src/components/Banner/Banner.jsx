import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md: h-[75vh] bg-cover bg-center relative' style={{backgroundImage: `url(https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-white text-xl text-center absolute bottom-0 w-full bg-blue-900/60 p-3'>
            Avengers End Game
        </div>
    </div>
  )
}

export default Banner
import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div className=''>
      <div className='relative aspect-3/1 md-10'>
        <Image src="/fich.png" alt='big image' fill/>
      </div>
    </div>
  )
}

export default Homepage
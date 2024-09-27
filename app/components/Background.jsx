import React from 'react'
import Image from 'next/image'
import images from '../Public/images.jpeg'

const Background = () => {
  return (
    <div className='min-h-screen'>
      <Image src={ images } width={1000} height={1000}></Image>
    </div>
  )
}

export default Background

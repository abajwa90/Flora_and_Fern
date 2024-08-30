import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div style={{ height: '700px' }} className='flex flex-col sm:flex-row border border-gray-400 rounded-2xl'>
  {/* Hero Image */}
  <img style={{ height: '700px' }} className='w-full rounded-2xl' src={assets.hero_img} alt="Hero" />

  {/* Overlay Text */}
    <div className='absolute top-32 left-0 bottom-0 w-full h-full flex items-center justify-center'>
      <div className='bg-lime-800 bg-opacity-50 p-4 rounded text-white text-center'>
        <h1 className='text-5xl font-bold mb-7'>Welcome to Flora and Fern</h1>
        <p className='text-xl'>Explore our curated collection of indoor plants and garden essentials, carefully selected to elevate any space.</p>
      </div>
    </div>
  </div>
  )
}

export default Hero

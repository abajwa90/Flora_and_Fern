import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-green-600'>About Flora and Fern</p>
          <p className=' text-black-500'>Flora and Fern believes that everyone has a greenthumb! Founded on the love of all things green, we aim to open up the world of plants to anyone and everyone. Located in the heart of the city, we offer a variety of plants that are perfect for any home or office. Come visit us and we'll be happy to help you find the perfect plant for your space. </p>
          <p className=' text-black-500'>We are open Monday through Friday from 9am to 5pm. We are closed on weekends and holidays. 
          We are located at: </p>
          <p className=' text-black-500'>1234 NW Street, Toronto, M5T 2R1</p>
          <p className=' text-black-500'>Tel: (123) 456-7890 <br /> Email: contact@floraandfern.com</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact

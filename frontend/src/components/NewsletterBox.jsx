import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
      Psst! Get ahold of our monthly newsletter for plant care tips, exclusive offers, and more! 
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-black rounded-2xl' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-green-600 text-white text-xs px-10 py-4 rounded-2xl'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox

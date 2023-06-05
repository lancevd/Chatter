import React from 'react'
import TestimonialIMG from '../../assets/images/testimonial.png'

const Testimonial = () => {
  return (
    <div className='bg-[#FFF6E5]'>
        <div className="contain flex flex-col items-center sm:flex-row py-6 gap-12">
            <div className="w-full sm:w-1/4 rounded-full h-full border-2 flex items-center justify-center overflow-hidden">
                <img src={TestimonialIMG} className='w-full'/>
            </div>
            <div className="w-full sm:w-3/4">
                <p>"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant com"</p>
                <br />
                <p><span className='text-lg font-medium'>Adebobola Muhydeen,</span> Software developer at Apple</p>
                <button className="btn-pry mt-3">Join Chatter</button>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
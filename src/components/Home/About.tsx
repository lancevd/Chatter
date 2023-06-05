import React from 'react'
import AboutImg from '../../assets/images/About.png'

const About = () => {
  return (
    <div className='flex gap-12 flex-col-reverse md:flex-row contain py-6'>
        <div className="w-full md:w-2/3"> 
            <h3>About Chatter</h3>
            <br/>
            <p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
        </div>
        <div className='w-full md:w-1/3'>
            <img src={AboutImg} alt="About Chatter" className='w-full' />
        </div>
    </div>
  )
}

export default About
import React, { useState } from 'react'
import Left from '../components/Signup/Left'
import Right from '../components/Signup/Right'

const Signup = () => {

  return (
    <div className='flex h-[100vh]'>
      <Left />
      <Right />
    </div>
  )
}

export default Signup
import React from 'react'
import Register from './register/Register'
import Login from './login/Login'

const Right = () => {
    function showForm() {
        
    }
  return (
    <div className='w-[55%] py-8'>
        <div className="w-[80%] mx-auto">
            <div className="flex w-full">
                <div className='w-[50%] border-b-4 border-[#543EE0] cursor-pointer'>
                    <h5>REGISTER</h5>
                </div>
                <div className='w-[50%] border-b-4 cursor-pointer'>
                    <h5 className='text-right'>LOGIN</h5>
                </div>
            </div>
        </div>
        <br />
        <div className="w-[80%] mx-auto">
            <Login/>
            {/* <Register/> */}
        </div>
    </div>
  )
}

export default Right
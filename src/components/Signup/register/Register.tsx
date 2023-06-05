import React from 'react'

const Register = () => {
  return (
    <div className='reg-form'>
        <h4>Register as a Reader/Writer</h4>
        <div className="h-3"></div>
        <form action="">
            <div className="flex gap-3 w-full">
                <div className='w-1/2'>
                    <label htmlFor="fname">First Name</label>
                    <div className="h-1"></div>
                    <input type="text" id='fname' className='border-2 rounded-lg p-2 w-full' />
                </div>
                <div className='w-1/2'>
                    <label htmlFor="lname">Last Name</label>
                    <div className="h-1"></div>
                    <input type="text" id='lname' className='border-2 rounded-lg p-2 w-full' />
                </div>
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="role">You are joining as?</label>
                <div className="h-1"></div>
                <select name="" id="role" className='border-2 rounded-lg p-2 w-full'>
                    <option value="writer">Writer</option>
                    <option value="reader">Reader</option>
                </select>
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="email">Email Address</label>
                <div className="h-1"></div>
                <input type="email" id='email' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="pass">Password</label>
                <div className="h-1"></div>
                <input type="password" id='pass' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="cpass">Confirm Password</label>
                <div className="h-1"></div>
                <input type="password" id='cpass' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <div className="h-3"></div>
            <button className="btn-pry w-full">Create Account</button>
            <div className="h-3"></div>
            <button className='w-full p-2 rounded-lg border'>Sign up with Google</button>
            <div className="h-3"></div>
            <button className='w-full p-2 rounded-lg border'>Sign up with Linkedin</button>
        </form>
    </div>
  )
}

export default Register
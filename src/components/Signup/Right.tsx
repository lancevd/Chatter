import {useState} from 'react'
import Register from './register/Register'
import Login from './login/Login'

const Right = () => {
    const [formDisplay, setFormDisplay] = useState(true)

  return (
    <div className='w-full lg:w-[55%] py-8'>
        <div className="w-[80%] mx-auto">
            <div className="flex w-full">
                <div className={`w-[50%] border-b-4 ${formDisplay ? 'border-[#543EE0]' : 'border-transparent'} cursor-pointer`} onClick={() => setFormDisplay(true)}>
                    <h5>REGISTER</h5>
                </div>
                <div className={`w-[50%] border-b-4 ${!formDisplay ? 'border-[#543EE0]' : 'border-transparent'} cursor-pointer`} onClick={() => setFormDisplay(false)}>
                    <h5 className='text-right'>LOGIN</h5>
                </div>
            </div>
        </div>
        <br />
        <div className="w-[80%] mx-auto">
            <div className={`${formDisplay ? 'block' : 'hidden'}`}>
                <Register />
            </div>
            <div className={`${!formDisplay ? 'block' : 'hidden'} `}>
                <Login/>
            </div>
        </div>
    </div>
  )
}

export default Right
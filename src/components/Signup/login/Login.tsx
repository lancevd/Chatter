import {useContext} from 'react'
import { ChatterContext } from '../../../context/ChatterContext'

const Login = () => {
  const {handleGoogleAuth} = useContext(ChatterContext)
  return (
    <div className='login-form'>
        <br />
        <h4 className='text-center'>Welcome back</h4>
        <br />
        <form action="">
            <div className='w-full'>
                <label htmlFor="user">Email address</label>
                <div className="h-2"></div>
                <input type="email" id='user' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <br />
            <div className='w-full'>
                <label htmlFor="pword">Password</label>
                <div className="h-2"></div>
                <input type="email" id='pword' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <br />
            <button className="btn-pry w-full">Log in</button>
            <br /> <br />
            <button onClick={handleGoogleAuth} className='w-full p-2 rounded-lg border'>Continue with Google</button>
        </form>
    </div>
  )
}

export default Login
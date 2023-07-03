import {useContext, useState} from 'react'
import { ChatterContext } from '../../../context/ChatterContext'
import {auth} from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const {handleGoogleAuth} = useContext(ChatterContext)

    function submitAcct(e:any ) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setSuccess('Registration Successful')
        })
        .catch((error) => {
            const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(errorMessage)
  });

    }
    // createUserWithEmailAndPassword( auth, userEmail)
  return (
    <div className='reg-form'>
        <h4>Register as a Reader/Writer</h4>
        <div className="h-3"></div>
        <form action="">
        <div className={`h-[5rem] ${success == '' ? 'hidden' : 'flex' } absolute px-12 top-5 right-5 rounded-lg text-white justify-center items-center bg-green-700`}>Registration Success</div>
            <div className="flex gap-3 w-full">
                <div className='w-1/2'>
                    <label htmlFor="fname">First Name</label>
                    <div className="h-1"></div>
                    <input type="text" id='fname' className='border-2 rounded-lg p-2 w-full' required />
                </div>
                <div className='w-1/2'>
                    <label htmlFor="lname">Last Name</label>
                    <div className="h-1"></div>
                    <input type="text" id='lname' className='border-2 rounded-lg p-2 w-full' required />
                </div>
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="role">You are joining as?</label>
                <div className="h-1"></div>
                <select name="" id="role" className='border-2 rounded-lg p-2 w-full' required>
                    <option value="writer">Writer</option>
                    <option value="reader">Reader</option>
                </select>
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="email">Email Address</label>
                <div className="h-1"></div>
                <input onChange={(e:any) => setUserEmail(e.target.value)} type="email" id='remail' className='border-2 rounded-lg p-2 w-full' required />
            </div>
            <div className="h-3"></div>
            <div className='w-full'>
                <label htmlFor="pass">Password</label>
                <div className="h-1"></div>
                <input onChange={(e:any) => setUserPassword(e.target.value)} type="password" id='rpass' className='border-2 rounded-lg p-2 w-full' required />
            </div>
            <div className="h-3"></div>
            {/* <div className='w-full'>
                <label htmlFor="cpass">Confirm Password</label>
                <div className="h-1"></div>
                <input type="password" id='cpass' className='border-2 rounded-lg p-2 w-full' required />
            </div> */}
            <div className="h-3"></div>
            <div className={`bg-red-700 my-2 px-3 ${success !== '' ? 'hidden' : 'block'} text-white`}>{error}</div>
            <button onClick={submitAcct} className="btn-pry w-full">Create Account</button>
            <div className="h-3"></div>
            <button onClick={handleGoogleAuth} className='w-full p-2 rounded-lg border'>Sign up with Google</button>
            <div className="h-3"></div>
            {/* <button className='w-full p-2 rounded-lg border'>Sign up with Linkedin</button> */}
        </form>
    </div>
  )
}

export default Register
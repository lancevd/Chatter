import { useContext, useState } from 'react'
import {FaSearch } from 'react-icons/fa'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ChatterContext } from '../context/ChatterContext'

const Header = () => {
   const {logOut, currentUser} = useContext(ChatterContext)
   const [showBtn, setShowBtn] = useState('hidden')

   function toggleBtn () {
      if (showBtn == 'hidden') {
         setShowBtn('block')
      } else {
         setShowBtn('hidden')
      }
   }
  return (
    <header className='w-full md:w-[75%] lg:w-[80%] border absolute right-0 h-16 py-1 px-8 lg:px-20'>
        <div className='flex justify-end gap-12 md:gap-32'>
           <div className='border flex items-center gap-4 text-[#626262] rounded-lg p-3 h-full w-1/2'>
              <span className='text-lg'> <FaSearch/> </span>
              <input className='h-full w-[95%] md:w-[80%] outline-none ' type="text" placeholder='Search Chatter' />
           </div>
           <div className='flex items-center gap-4 text-2xl'>
              <MdOutlineNotificationsNone/>
              {currentUser ? 
              (
               <div className='flex flex-col'>
                  <div onClick={toggleBtn} className="w-8 h-8 md:w-12 md:h-12 cursor-pointer rounded-full bg-blue-800 overflow-hidden"><img src={currentUser.photoURL} /> </div>
                  <button onClick={logOut} className={`bg-blue-800 p-1 text-white border rounded-md text-sm ${showBtn}`}>Logout</button>
               </div>
              )
              :
              (<Link to={'/register'}><div className="btn-pry w-fit h-fit text-xs md:text-base p-1 md:p-2 cursor-pointer">Start Writing</div></Link>)
              }
           </div>
        </div>
    </header>
  )
}

export default Header
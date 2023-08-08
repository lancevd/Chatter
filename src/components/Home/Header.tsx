import {useState} from 'react'
import { HiMenu } from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='w-full bg-white py-2'>
      <nav className='w-11/12 mx-auto flex-col lg:flex-row flex justify-between items-center'>
        <div className="flex justify-between w-full lg:w-fit items-center">
          <h1 className="text-[#543EE0]">CHATTER</h1>
          <div onClick={e => setShowMenu(!showMenu)} className='lg:hidden text-2xl'><HiMenu /></div>
        </div>
        <menu className={`${!showMenu ? 'hidden' : 'flex'} flex-col lg:flex-row lg:flex gap-4`}>
          <a className='font-bold' href='#'>Home</a>
          <a className='font-bold' href='#'>About us</a>
          <a className='font-bold' href='#'>Contact</a>
          <a className='font-bold' href='#'>Blog</a>
        </menu>
        <div className={`${!showMenu ? 'hidden' : 'flex'} flex-col lg:flex-row lg:flex gap-6`}>
          <Link to='/register'><button className='w-24 p-2 border-2 rounded-lg border-[#543EE0]'>Login</button></Link>
          <button className='w-24 p-2 border-2 rounded-lg border-[#543EE0] bg-[#543EE0] text-white'>Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
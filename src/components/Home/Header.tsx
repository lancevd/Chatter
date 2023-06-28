import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full bg-white py-2'>
      <nav className='w-11/12 mx-auto flex justify-between items-center'>
        <h1 className="text-6xl font-bold text-[#543EE0]">CHATTER</h1>
        <menu className='flex gap-4'>
          <a className='font-bold' href='#'>Home</a>
          <a className='font-bold' href='#'>About us</a>
          <a className='font-bold' href='#'>Contact</a>
          <a className='font-bold' href='#'>Blog</a>
        </menu>
        <div className="flex gap-6">
          <Link to='/register'><button className='w-24 p-2 border-2 rounded-lg border-[#543EE0]'>Login</button></Link>
          <button className='w-24 p-2 border-2 rounded-lg border-[#543EE0] bg-[#543EE0] text-white'>Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
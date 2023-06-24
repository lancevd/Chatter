import {Route, Routes, useLocation} from 'react-router-dom'
import Feed from "./Feed"
import Footer from "./Home/Footer"
import Analytics from '../pages/Analytics'
import PostDetails from '../pages/PostDetails'
import { useContext } from 'react'
import { ChatterContext } from '../context/ChatterContext'


const Content = () => {
  const {posts, users} = useContext(ChatterContext)
  const location =  useLocation()
  return (
    <div className='absolute border overflow-scroll left-12 w-[85%] md:left-[25%] lg:left-[20%] md:w-[70%] lg:w-[75%] md:mx-[2.5%] mt-20'>
        <Routes>
            <Route path="feed" element={<Feed/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path={`post/${location.pathname}`} element={<PostDetails/>} />
        </Routes>

        <Footer />
    </div>
  )
}

export default Content
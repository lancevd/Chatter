import {useEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Feed from "./Feed"
import Footer from "./Home/Footer"
import Analytics from '../pages/Analytics'
import PostDetails from '../pages/PostDetails'
import { useContext } from 'react'
import { ChatterContext } from '../context/ChatterContext'


type articleProps = {
  postId: any
}
const Content = () => {
  const {posts, users} = useContext(ChatterContext)
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const location =  useLocation()
  const postPath = location.pathname.slice(6)
  console.log(postPath) 

  useEffect(()=>{
    if (posts.length === 0) {
      return
    }

    posts.find((post: any) => post.id === postPath)
  }, [])
  return (
    <div className='absolute border overflow-scroll left-12 w-[85%] md:left-[25%] lg:left-[20%] md:w-[70%] lg:w-[75%] md:mx-[2.5%] mt-20'>
        <Routes>
            <Route path="/feed" element={<Feed/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path={`/post/${postPath}`} element={<PostDetails postId={postPath} author={''}/>} />
        </Routes>

        <Footer />
    </div>
  )
}

export default Content
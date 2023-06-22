import {Route, Routes} from 'react-router-dom'
import Feed from "./Feed"
import Footer from "./Home/Footer"
import Analytics from '../pages/Analytics'
import Post from '../pages/Post'


const Content = () => {
  return (
    <div className='absolute border overflow-scroll left-12 w-[85%] md:left-[25%] lg:left-[20%] md:w-[70%] lg:w-[75%] md:mx-[2.5%] mt-20'>
        <Routes>
            <Route path="feed" element={<Feed/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path="pos/:postid" element={<Post/>} />
        </Routes>

        <Footer />
    </div>
  )
}

export default Content
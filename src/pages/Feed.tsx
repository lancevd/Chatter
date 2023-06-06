import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Analytics from './Analytics'

const Feed = () => {
  return (
    <div>
        <Header />
        <SideBar />
        <Routes>
            {/* <Route path='/' element={<Header/>} /> */}
            <Route path='/analytics' element={<Analytics/>} />
        </Routes>
    </div>
  )
}

export default Feed
import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Analytics from './Analytics'
import Content from '../components/Content'

const MainApp = () => {
  return (
    <div className='h-screen overflow-hidden'>
        <Header />
        <SideBar />
        <Content />
    </div>
  )
}

export default MainApp
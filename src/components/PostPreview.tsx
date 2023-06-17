import {VscBook} from 'react-icons/vsc'
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md' 
import Post1 from '../assets/images/post1.png'
import Post2 from '../assets/images/post2.png'

const PostPreview = () => {
  return (
    <div className="border p-4 md:p-8">
        <div className='flex gap-4 items-center'>
            <div className="w-16 h-16 bg-cyan-800 rounded-full">

            </div>
            <div className="flex flex-col">
                <h5>Grace Ikpang</h5>
                <p><span>Product designer </span> | May 25th, 2023</p>
            </div>
        </div>
        <br />
        <h4>Starting out as a Product designer</h4>
        <p className="tex-sm flex gap-2 items-center"><span> <VscBook/> </span> 10 mins read</p>
        <br />
        <p>Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.</p>
        <br />
        <img src={Post1} alt="" className='w-full' />
        <div className="h-3"></div>
        <div className="flex justify-between">
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineComment/> </span> 200 </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineHeart/> </span> 120 </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><MdOutlineAnalytics/> </span> 2190 views </div>
            </div>
        </div>
    </div>
  )
}

export default PostPreview
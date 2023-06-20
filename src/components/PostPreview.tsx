import {VscBook} from 'react-icons/vsc'
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md' 
import Post1 from '../assets/images/post1.png'
import Post2 from '../assets/images/post2.png'

type postProps = {
    post: any
}

const PostPreview: React.FC<postProps> = ({post}) => {
    console.log(post)
  return (
    <div className="border p-4 md:p-8">
        <div className='flex gap-4 items-center'>
            <div className="w-8 h-8 md:w-16 md:h-16 bg-cyan-800 rounded-[50%]">
            </div>
            <div className="flex flex-col">
                <h5>{post.data.author}</h5>
                <p><span>Product designer </span> | {}</p>
            </div>
        </div>
        <br />
        <h4>{post.data.title}</h4>
        <p className="tex-sm flex gap-2 items-center"><span> <VscBook/> </span> 10 mins read</p>
        <br />
        <p>{post.data.brief}</p>
        <br />
        <img src={Post1} alt="" className='w-full' />
        <div className="h-3"></div>
        <div className="flex justify-between">
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineComment/> </span> {post.data.comments} </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineHeart/> </span> {post.data.likes} </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><MdOutlineAnalytics/> </span> {post.data.views} views </div>
            </div>
        </div>
    </div>
  )
}

export default PostPreview
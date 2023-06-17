import {HiOutlinePencil} from 'react-icons/hi'
import PostPreview from './PostPreview'

const Feed = () => {
  return (
    <div className='w-[90%] mx-auto py-6'>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <h4>Feed</h4>
                    <p>Explore different content you’d love </p>
                </div>

                <button className="btn-pry w-fit flex gap-2 items-center py-4"><HiOutlinePencil/> <span>Post a content</span></button>
            </div>
            <br /> <br /> 
            <div className="border flex justify-between items-center px-4 py-6 rounded-lg">
                <h5>For you</h5>
                <h5>Featured</h5>
                <h5>Recent</h5>
            </div>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
    </div>
  )
}

export default Feed
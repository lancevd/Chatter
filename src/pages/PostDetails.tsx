import { useEffect, useState } from 'react';
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md' 
import ReactMarkdown from 'react-markdown'

type articleProps = {
  postId: any
  author: any
  post: any
}

const PostDetails: React.FC<articleProps> = ({post, author}) => {     
  // console.log(post?.data)   
  return (
    <div className='p-6'>
      <div className='flex gap-4 items-center'>
            <div className="w-8 h-8 md:w-16 md:h-16 bg-cyan-800 rounded-[50%] overflow-hidden">
                <img src={author.data ? author?.data?.userImage : 'Loading...'} />
            </div>
            <div className="flex flex-col">
                    <h5>{author.data ? author?.data?.name : 'Loading...'}</h5>
                <p><span>{author.data ? author?.data?.occupation : 'Loading...'} </span> | {post.data ? new Date(post.data.publishedOn).toLocaleString('en-Us', {day: 'numeric', month: 'long', year: 'numeric'} ) : ''}</p>
            </div>
        </div>
        <br />
        <h2>{post.data ? post?.data?.title : 'Loading...'}</h2>
        <br />
        <img src={post.data ? post?.data?.bannerImage : 'Loading'} alt="" className='w-full' />
        <br />
        <ReactMarkdown>{post.data ? post?.data?.body : 'Loading...'}</ReactMarkdown>
        <br />
        <div className="flex justify-between">
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineComment/> </span> {post?.data?.comments} </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><AiOutlineHeart/> </span> {post?.data?.likes} </div>
            </div>
            <div className="h-3"></div>
            <div>
                <div className='flex gap-2 items-center'><span><MdOutlineAnalytics/> </span> {post?.data?.views} views </div>
            </div>
        </div>
    </div>
  );
};

export default PostDetails;

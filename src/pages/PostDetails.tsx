import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type articleProps = {
  postId: any
  author: any
  post: any
}

const PostDetails: React.FC<articleProps> = ({postId, author}) => {
  // const {postid} = useParams()
        
  return (
    <div>
      <h5>Hello {author.name} </h5>
      {/* <h1>{post.title}</h1>
      <p>{post.content}</p> */}
    </div>
  );
};

export default PostDetails;

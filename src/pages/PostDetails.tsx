import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, getDocs } from 'firebase/firestore';

type articleProps = {
  postId: any
  author: any
}

const PostDetails: React.FC<articleProps> = ({postId, author}) => {
  // const {postid} = useParams()
        
  return (
    <div>
      <h5>{postId} Hello</h5>
      {/* <h1>{post.title}</h1>
      <p>{post.content}</p> */}
    </div>
  );
};

export default PostDetails;

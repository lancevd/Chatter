import {VscBook} from 'react-icons/vsc'
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md' 
import Post1 from '../assets/images/post1.png'
import Post2 from '../assets/images/post2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFirestore, doc, getDocs, DocumentData, collection, where } from 'firebase/firestore';
import {db} from '../firebase'

type postProps = {
    post: any
}

const PostPreview: React.FC<postProps> = ({post}) => {
    const [authorData, setAuthorData] = useState<DocumentData | null>(null)
    const [authorInfo, setAuthorInfo] = useState('')

    
    useEffect(() =>{
        setAuthorInfo(post.data.author)
        const getAuthorData = async () => {
            const authorDoc = ((await getDoc(doc(db, 'Users', 'olamosob@gmail.com' ))).data());
            // console.log(post.data.author)
            // setAuthorData(authorDoc)
            // console.log(authorDoc) 
            // const usersRef = collection(db, "Users");
            // const q = usersRef.where( "email", "==" "example@example.com");
            // const querySnapshot = await getDocs(q)
          };


          

        getAuthorData()
    },[])

    console.log(authorData)
    
  return (
    <div className="border p-4 md:p-8">
        <div className='flex gap-4 items-center'>
            <div className="w-8 h-8 md:w-16 md:h-16 bg-cyan-800 rounded-[50%]">
            </div>
            <div className="flex flex-col">
                    <h5>{authorData ? authorData.name : ''}</h5>
                <p><span>Product designer </span> | {}</p>
            </div>
        </div>
        <br />
        <Link to={`post/${post.id}`}><h4>{post.data.title}</h4></Link>
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
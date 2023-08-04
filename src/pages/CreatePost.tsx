import {useContext, useState} from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ChatterContext } from '../context/ChatterContext'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase'

const CreatePost = () => {
  const {currentUser} = useContext(ChatterContext)

  const [title, setTitle] = useState('')
  const [brief, setBrief] = useState('')
  const [category, setCategory] = useState('')
  const [bannerImage, setBannerImage] = useState()
  const [body, setBody] = useState('')

  const publishPost = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, 'Articles'), {
      title: title,
      bannerImage: bannerImage,
      brief: brief,
      category: category,
      body: body,
      publishedOn: serverTimestamp(),
      author: currentUser.email,
    })

    alert('Post Published!')
  }
  return (
    <main className='p-2 md:p-4'>
      <h2 className="text-center">Create Post</h2>
      <br />
      <form action="">
        <label>Title<span className="text-red-600">*</span> </label> <br />
        <input onChange={e => setTitle(e.target.value)} type="text" value={title} className='text-2xl p-2 border rounded-md font-medium w-full' placeholder='Article Title' required/>
        <br /><br />
        <label>Category<span className="text-red-600">*</span></label>
        <br />
        <select onChange={e => setCategory(e.target.value)} className='p-2 rounded-md w-full border'>
          <option value="news">News</option>
          <option value="programming">Programming</option>
          <option value="trading">Trading</option>
          <option value="others">Others</option>
        </select>
        <br /><br />
        <label >Excerpt/Brief <span className="text-red-600">*</span></label>
        <input onChange={e => setBrief(e.target.value)} type="text" value={brief} className='p-2 rounded-md border w-full' required/>
        <br /> <br />
        <label>Banner Image<span className="text-red-600">*</span></label>
        <br />
        <input onChange={(e:any) => setBannerImage(e.target.value)} type="file" value={bannerImage} className='p-2 rounded-md border w-full' accept='.jpg,.png' required />
        <br /><br />
        <label>Body<span className="text-red-600">*</span></label>
        <br />
        <textarea value={body} onChange={e => setBody(e.target.value)} className='rounded-md border w-full min-h-[15rem] p-2' required >
        </textarea>
          {/* <ReactMarkdown > # Hello, *world*! </ReactMarkdown> */}
        <br /><br />
        <button onClick={publishPost} className='bg-[#543EE0] text-white py-2 px-4 rounded-md'>Post</button>
      </form>
    </main>
  )
}

export default CreatePost
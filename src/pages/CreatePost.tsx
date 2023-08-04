import React from 'react'

const CreatePost = () => {
  return (
    <main className='p-2 md:p-4'>
      <h2 className="text-center">Create Post</h2>
      <br />
      <form action="">
        <label>Title<span className="text-red-600">*</span> </label> <br />
        <input type="text" name="" className='text-2xl p-2 border rounded-md font-medium w-full' placeholder='Article Title' required/>
        <br /><br />
        <label >Excerpt/Brief <span className="text-red-600">*</span></label>
        <input type="text" className='p-2 border w-full' required/>
        <br /> <br />
        <label>Banner Image<span className="text-red-600">*</span></label>
        <br />
        <input type="file" name="" className='p-2 border w-full' accept='.jpg,.png' required />
        <br /><br />
        <label>Body<span className="text-red-600">*</span></label>
        <br />
        <textarea className='rounded-md border w-full min-h-[15rem] p-2' required ></textarea>
        <br /><br />
        <button >Post</button>
      </form>
    </main>
  )
}

export default CreatePost
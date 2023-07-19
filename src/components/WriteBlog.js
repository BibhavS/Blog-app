import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db} from '../firebase-config'
import { useNavigate } from 'react-router-dom';

export default function WriteBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const blogCollectionRef = collection(db, "Blogs")
  let nav= useNavigate();
  const createBlog = async () => {
      await addDoc(blogCollectionRef,
         {title,
          content, 
          writer:{name: auth.currentUser.displayName, id:auth.currentUser.uid}
        });
        nav("/");
        alert("The blog is posted successfully");
  }

  return (
     <>
     <div className='mt-8 flex flex-col items-center'>
      <h3 className='text-[1.75rem] font-medium'>Create your post</h3>
      <div className="flex flex-col mt-4">
      <div>
        <label className='text-2xl font-medium' htmlFor="title">Title : </label>
        <input className='mt-4 p-2 w-full border-2 border-slate-900' type="text" onChange={
          (e)=>{
            setTitle(e.target.value);
          }
        }/>
      </div>
      <div className='mt-6 flex flex-col'>
        <label className='text-2xl font-medium' htmlFor="">Post : </label>
        <textarea className='p-2 mt-4 border-2 border-slate-900' name="textarea" rows= '11' cols='90' onChange={
          (e)=>{
            setContent(e.target.value);
          }
        }></textarea>
      </div>
      </div>
      <button className='mt-6 bg-slate-900 text-2xl text-white py-3 px-10 rounded-md' onClick={createBlog}>POST</button>
     </div>
     </>
  )
}

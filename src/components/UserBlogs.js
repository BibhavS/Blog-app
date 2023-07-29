import React from 'react'
import { auth, db } from '../firebase-config'
import { LogContext } from './LogContext';
import { useContext } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';

export default function UserBlogs({posts, setUpdate}) {
  const [isLogged] = useContext(LogContext);
  if(isLogged){
    var userPosts = posts.filter((post)=> (post.writer.name === auth.currentUser.displayName));
  }

  const removeBlog = async (id)=>{
      const blogDoc = doc(db, "Blogs", id)
      await deleteDoc(blogDoc);
      alert('Post deleted successfully');
      setUpdate(data => data+1);
  }

  return (
     <>
     {isLogged ? (
       <div className='flex flex-col items-center mt-10'>
       {(userPosts.length === 0) ? (
         <h1 className='text-center text-xl'>You have not posted any blogs yet</h1>
       ): null}
       {userPosts.map((post, key) =>{
         return (
           <div className='rounded-xl shadow-xl w-1/2 mb-8 p-8 flex flex-col' key={key}>
              <div className='flex justify-between items-center'>
                <h1 className='leading-tight text-5xl font-medium '>{post.title}</h1>
              </div>
               <span className='mt-4 text-xl text-slate-700'>@{post.writer.name}</span>
              <p className='post max-h-[15rem] text-lg mt-8 text-justify overflow-hidden pt-3 pr-3'>{post.content}</p>
              <p className='text-lg'>. . . . . . . . . </p>
              <div className='flex mt-6'>
               <button onClick={() => removeBlog(post.id)} className='bg-slate-900 text-xl text-white py-2 px-6 rounded-md max-lg:py-1'>Remove post</button>
              </div>
           </div>
         )
       })}
     </div>
     ): null}
     </>
  )
}

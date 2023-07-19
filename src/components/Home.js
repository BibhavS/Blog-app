import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { LogContext } from './LogContext';
 
export default function Home() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "Blogs");
  const [isLogged] = useContext(LogContext);

  useEffect(()=>{
    const getData = async () =>{
      const data = await getDocs(postsRef);
      let docsData = data.docs.map(doc => ({...doc.data(), id: doc.id}));
      setPosts(docsData);
    }
    getData();
  }, []);

  return (
    <>
    <div className='mt-10'>
      {!isLogged ? (<h4 className='text-center font-medium mb-8 text-2xl text-red-600'>You need to sign in to post your blog</h4>): null}
      <div className='flex flex-col items-center'>
          {posts.map((post, key) =>{
            return (
              <div className='rounded-xl shadow-xl w-1/2 mb-8 p-8 flex flex-col' key={key}>
                 <div className='flex justify-between items-center'>
                   <h1 className='leading-tight text-5xl font-medium '>{post.title}</h1>
                 </div>
                 <span className='mt-4 text-xl text-slate-700'>@{post.writer.name}</span>
                 <p className='post max-h-[22rem] text-lg mt-8 text-justify overflow-auto pt-3 pr-3'>{post.content}</p>
              </div>
            )
          })}
      </div>
    </div>
    </>
  )
}

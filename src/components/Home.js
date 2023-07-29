import React, { useContext, useEffect} from 'react';
import { LogContext } from './LogContext';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home({posts}) {
  const [isLogged] = useContext(LogContext);
  
  useEffect(()=>{
    AOS.init({duration: 1500, once: true})
  }, [])

  return (
    <>
    <div className='mt-10'>
      {!isLogged ? (<h4 className='text-center font-medium mb-8 text-2xl text-red-600'>You need to sign in to post your blog</h4>): null}
      <div className='flex flex-col items-center'>
          {posts.map((post, key) =>{
            return (
              <div className='rounded-xl shadow-xl w-1/2 mb-8 p-8 flex flex-col' key={key} data-aos = 'fade-up'>
                 <div className='flex justify-between items-center'>
                   <h1 className='leading-tight text-5xl font-medium '>{post.title}</h1>
                 </div>
                 <span className='mt-4 text-xl text-slate-700'>@{post.writer.name}</span>
                 <span className='mt-4 text-base text-slate-700 '>{Math.round((post.content.split(" ")).length * 0.008)} min read</span>
                 <p className='post max-h-[22rem] text-lg mt-8 text-justify overflow-auto pt-3 pr-3'>{post.content}</p>
              </div>
            )
          })}
      </div>
    </div>
    </>
  )
}

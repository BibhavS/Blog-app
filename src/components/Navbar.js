import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
     <>
     <div className='py-6 px-3 text-slate-900 max-md:hidden'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h2 className='text-3xl ml-4 font-semibold'>Blog App</h2>
            <div className='flex ml-16 text-xl max-lg:text-base max-lg:ml-10 max-lg:gap-6 gap-10'>
              <Link to='/'><h3>Home</h3></Link>
              <Link to='writeblog'><h3>Write a blog</h3></Link>
              <Link to='contact'><h3>Contact us</h3></Link>
            </div>
          </div>
          <div className='mr-8 text-xl'>
              <Link to='/login'><button className='bg-slate-900 text-white py-2 px-6 rounded-md'>Login</button></Link>
          </div>
        </div>
     </div>
     </>
  )
}

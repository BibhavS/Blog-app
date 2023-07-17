import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { LogContext } from './LogContext';

export default function Navbar()
 {
  const [isLogged, setIsLogged] = useContext(LogContext);

  const signUserOut = () =>{
    signOut(auth).then(()=>{
     localStorage.clear();
     setIsLogged(false);
    })
  }
  return (
     <>
     <div className='py-6 px-3 text-slate-900 max-md:hidden'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h2 className='text-3xl ml-4 max-lg:text-2xl font-semibold'>Blog App</h2>
            <div className='flex ml-16 text-xl max-lg:text-[0.9rem] max-lg:ml-8 max-lg:gap-4 gap-10'>
              <Link to='/'><h3>Home</h3></Link>
              {isLogged ? (<Link to='writeblog'><h3>Write a blog</h3></Link>) : null}
              <Link to='contact'><h3>Contact us</h3></Link>
            </div>
          </div>
          <div className='mr-6 text-xl max-lg:text-[0.9rem]'>
              {!isLogged ? (
                <Link to='/login'><button className='bg-slate-900 text-white py-2 px-6 rounded-md max-lg:py-1'>Login</button></Link>
              ) : (<div className='flex items-center'>
                <p>Bibhav Shrestha</p>
                <button onClick = {signUserOut} className='bg-slate-900 text-white py-2 px-6 rounded-md ml-6 max-lg:py-1'>Log out</button>
              </div>) }
          </div>
        </div>
     </div>
     </>
  )
}
